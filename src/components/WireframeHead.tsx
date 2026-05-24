import { useEffect, useRef } from 'react'

export default function WireframeHead() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const COLOR = '#a3a320'
    const COLOR_DIM = 'rgba(163, 163, 32, 0.15)'
    const COLOR_GLOW = 'rgba(163, 163, 32, 0.6)'
    const COLOR_PARTICLE = 'rgba(200, 200, 64, 0.8)'

    // Generate head wireframe points (parametric ellipsoid-based head shape)
    const headPoints: { x: number; y: number; z: number }[] = []
    const gridLines: { from: number; to: number }[] = []

    const ROWS = 28
    const COLS = 32

    for (let i = 0; i <= ROWS; i++) {
      const phi = (i / ROWS) * Math.PI // 0 to PI (top to bottom)
      for (let j = 0; j <= COLS; j++) {
        const theta = (j / COLS) * Math.PI * 2 // 0 to 2PI (around)

        // Base ellipsoid
        let rx = 1.0
        let ry = 1.3
        let rz = 1.0

        // Skull shape modifications
        const sinPhi = Math.sin(phi)
        const cosPhi = Math.cos(phi)

        // Wider at temples
        if (phi > 0.3 && phi < 1.2) {
          rx *= 1.05
          rz *= 1.0
        }

        // Jaw narrowing
        if (phi > 1.8) {
          const jawFactor = 1 - (phi - 1.8) * 0.5
          rx *= Math.max(0.4, jawFactor)
          rz *= Math.max(0.5, jawFactor)
        }

        // Chin point
        if (phi > 2.5) {
          rx *= 0.6
          rz *= 0.7
        }

        // Brow ridge
        if (phi > 0.6 && phi < 1.0 && Math.cos(theta) > 0.3) {
          ry *= 1.02
        }

        // Nose protrusion
        if (phi > 1.0 && phi < 1.6 && theta > Math.PI * 0.85 && theta < Math.PI * 1.15) {
          const noseFactor = Math.sin((phi - 1.0) / 0.6 * Math.PI)
          const noseWidth = 1 - Math.abs(theta - Math.PI) / (Math.PI * 0.15)
          rz *= 1 + 0.25 * noseFactor * Math.max(0, noseWidth)
        }

        // Eye sockets (indentations)
        const eyeLeft = theta > Math.PI * 0.6 && theta < Math.PI * 0.85
        const eyeRight = theta > Math.PI * 1.15 && theta < Math.PI * 1.4
        if ((eyeLeft || eyeRight) && phi > 0.8 && phi < 1.15) {
          rx *= 0.94
          rz *= 0.92
        }

        let x = rx * sinPhi * Math.sin(theta)
        let y = -ry * cosPhi
        let z = rz * sinPhi * Math.cos(theta)

        headPoints.push({ x, y, z })

        const idx = i * (COLS + 1) + j

        // Horizontal lines
        if (j > 0) {
          gridLines.push({ from: idx - 1, to: idx })
        }
        // Vertical lines
        if (i > 0) {
          gridLines.push({ from: idx - (COLS + 1), to: idx })
        }
      }
    }

    // Floating particles
    const particles: { x: number; y: number; z: number; vx: number; vy: number; vz: number; life: number; maxLife: number }[] = []

    const spawnParticle = () => {
      const angle = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const r = 1.3 + Math.random() * 0.8
      particles.push({
        x: r * Math.sin(phi) * Math.sin(angle),
        y: -1.3 * Math.cos(phi),
        z: r * Math.sin(phi) * Math.cos(angle),
        vx: (Math.random() - 0.5) * 0.003,
        vy: -0.002 - Math.random() * 0.003,
        vz: (Math.random() - 0.5) * 0.003,
        life: 0,
        maxLife: 100 + Math.random() * 150,
      })
    }

    // Eye glow positions
    const getEyePositions = (rotY: number, w: number, h: number, scale: number, cx: number, cy: number) => {
      const eyes = [
        { x: -0.35, y: -0.35, z: 0.85 },
        { x: 0.35, y: -0.35, z: 0.85 },
      ]
      return eyes.map(e => {
        const cosR = Math.cos(rotY)
        const sinR = Math.sin(rotY)
        const rx = e.x * cosR + e.z * sinR
        const rz = -e.x * sinR + e.z * cosR
        const perspective = 4 / (4 + rz)
        return {
          x: cx + rx * scale * perspective,
          y: cy + e.y * scale * perspective,
          visible: rz > 0,
        }
      })
    }

    const draw = () => {
      time += 0.005
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      ctx.clearRect(0, 0, w, h)

      const cx = w * 0.55
      const cy = h * 0.48
      const scale = Math.min(w, h) * 0.28
      const rotY = Math.sin(time * 0.5) * 0.3 + 0.4

      // Project points
      const projected = headPoints.map(p => {
        const cosR = Math.cos(rotY)
        const sinR = Math.sin(rotY)
        const rx = p.x * cosR + p.z * sinR
        const rz = -p.x * sinR + p.z * cosR
        const perspective = 4 / (4 + rz)
        return {
          x: cx + rx * scale * perspective,
          y: cy + p.y * scale * perspective,
          z: rz,
          perspective,
        }
      })

      // Draw grid lines
      ctx.lineWidth = 0.5
      for (const line of gridLines) {
        const a = projected[line.from]
        const b = projected[line.to]
        if (!a || !b) continue

        const avgZ = (a.z + b.z) / 2
        if (avgZ < -0.5) continue

        const alpha = Math.max(0, Math.min(1, (avgZ + 0.5) * 0.5)) * 0.4
        ctx.strokeStyle = `rgba(163, 163, 32, ${alpha})`
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }

      // Draw vertices as dots
      for (const p of projected) {
        if (p.z < -0.3) continue
        const alpha = Math.max(0, Math.min(1, (p.z + 0.3) * 0.6)) * 0.5
        const size = p.perspective * 1.2
        ctx.fillStyle = `rgba(163, 163, 32, ${alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Eye glows
      const eyes = getEyePositions(rotY, w, h, scale, cx, cy)
      for (const eye of eyes) {
        if (!eye.visible) continue
        const gradient = ctx.createRadialGradient(eye.x, eye.y, 0, eye.x, eye.y, 25)
        gradient.addColorStop(0, COLOR_GLOW)
        gradient.addColorStop(0.5, 'rgba(163, 163, 32, 0.2)')
        gradient.addColorStop(1, 'rgba(163, 163, 32, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(eye.x, eye.y, 25, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = COLOR
        ctx.beginPath()
        ctx.arc(eye.x, eye.y, 3, 0, Math.PI * 2)
        ctx.fill()
      }

      // Particles
      if (Math.random() < 0.3) spawnParticle()

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.z += p.vz
        p.life++

        if (p.life > p.maxLife) {
          particles.splice(i, 1)
          continue
        }

        const cosR = Math.cos(rotY)
        const sinR = Math.sin(rotY)
        const rx = p.x * cosR + p.z * sinR
        const rz = -p.x * sinR + p.z * cosR
        const perspective = 4 / (4 + rz)
        const px = cx + rx * scale * perspective
        const py = cy + p.y * scale * perspective

        const lifeRatio = p.life / p.maxLife
        const alpha = lifeRatio < 0.1 ? lifeRatio * 10 : lifeRatio > 0.7 ? (1 - lifeRatio) / 0.3 : 1
        const size = 1 + alpha * 1.5

        ctx.fillStyle = `rgba(200, 200, 64, ${alpha * 0.6})`
        ctx.beginPath()
        ctx.arc(px, py, size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  )
}
