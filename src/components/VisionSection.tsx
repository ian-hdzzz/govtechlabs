import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

function OrbCanvas() {
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

    // Generate sphere points using fibonacci distribution
    const POINT_COUNT = 200
    const points: { theta: number; phi: number }[] = []
    const goldenAngle = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < POINT_COUNT; i++) {
      const y = 1 - (i / (POINT_COUNT - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const theta = goldenAngle * i
      points.push({ theta, phi: Math.acos(y) })
    }

    const draw = () => {
      time += 0.003
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      const cx = w * 0.5
      const cy = h * 0.48
      const radius = Math.min(w, h) * 0.32
      const rotY = time * 0.8
      const rotX = Math.sin(time * 0.3) * 0.2

      // Project and draw sphere points
      const projected: { x: number; y: number; z: number }[] = []
      for (const p of points) {
        const x0 = Math.sin(p.phi) * Math.cos(p.theta)
        const y0 = Math.cos(p.phi)
        const z0 = Math.sin(p.phi) * Math.sin(p.theta)

        // Rotate Y
        const x1 = x0 * Math.cos(rotY) + z0 * Math.sin(rotY)
        const z1 = -x0 * Math.sin(rotY) + z0 * Math.cos(rotY)
        // Rotate X
        const y1 = y0 * Math.cos(rotX) - z1 * Math.sin(rotX)
        const z2 = y0 * Math.sin(rotX) + z1 * Math.cos(rotX)

        projected.push({ x: cx + x1 * radius, y: cy + y1 * radius, z: z2 })
      }

      // Draw connections between nearby points
      ctx.lineWidth = 0.5
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x
          const dy = projected[i].y - projected[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < radius * 0.35) {
            const avgZ = (projected[i].z + projected[j].z) / 2
            const alpha = Math.max(0, (avgZ + 1) * 0.5) * (1 - dist / (radius * 0.35)) * 0.25
            if (alpha > 0.02) {
              ctx.strokeStyle = `rgba(163, 163, 32, ${alpha})`
              ctx.beginPath()
              ctx.moveTo(projected[i].x, projected[i].y)
              ctx.lineTo(projected[j].x, projected[j].y)
              ctx.stroke()
            }
          }
        }
      }

      // Draw points
      for (const p of projected) {
        const depthAlpha = Math.max(0, (p.z + 1) * 0.5)
        const alpha = depthAlpha * 0.8
        const size = 1 + depthAlpha * 1.5

        ctx.fillStyle = `rgba(200, 200, 64, ${alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()

        // Glow on front-facing points
        if (depthAlpha > 0.6) {
          ctx.fillStyle = `rgba(163, 163, 32, ${(depthAlpha - 0.6) * 0.15})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, size * 4, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Center glow
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 0.8)
      gradient.addColorStop(0, 'rgba(163, 163, 32, 0.06)')
      gradient.addColorStop(0.5, 'rgba(163, 163, 32, 0.02)')
      gradient.addColorStop(1, 'rgba(163, 163, 32, 0)')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(cx, cy, radius * 0.8, 0, Math.PI * 2)
      ctx.fill()

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
      className="w-full h-full"
      style={{ background: 'linear-gradient(135deg, rgba(163,163,32,0.03) 0%, rgba(10,14,8,1) 50%, rgba(163,163,32,0.02) 100%)' }}
    />
  )
}

const visionPoints = [
  'Habilitamos sistemas autónomos que optimizan recursos, datos e infraestructura.',
  'Convertimos la complejidad en eficiencia operativa real.',
]

export default function VisionSection() {
  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-mono text-accent-light mb-4 tracking-widest">NUESTRA MISIÓN</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Redefinir cómo funcionan las instituciones en la era de la{' '}
              <span className="gradient-text">inteligencia artificial,</span>
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              habilitando sistemas autónomos que optimicen recursos, datos e infraestructura y conviertan la complejidad en eficiencia operativa real.
            </p>
            <div className="space-y-4">
              {visionPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-accent-light mt-0.5 shrink-0" size={20} />
                  <p className="text-text-secondary">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-bg-card border border-border-default glow-border">
              <OrbCanvas />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Las instituciones pasarán de operar como organizaciones fragmentadas a operar como{' '}
            <span className="gradient-text">sistemas inteligentes.</span>
          </h3>

          <div className="mt-12 grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto relative">
            {/* Transformation arrow (desktop) */}
            <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                className="w-12 h-12 rounded-full bg-accent flex items-center justify-center"
                style={{ boxShadow: '0 0 30px rgba(163,163,32,0.4)' }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <ArrowRight className="text-white" size={20} />
              </motion.div>
            </div>

            {/* Fragmentado */}
            <div className="p-8 rounded-2xl bg-bg-card border border-red-500/15 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent" />
              <div className="relative z-10">
                <div className="flex justify-center gap-2 mb-5 h-14 items-center">
                  {[
                    { x: -6, y: 4, o: 0.5 },
                    { x: 3, y: -7, o: 0.7 },
                    { x: -4, y: 8, o: 0.4 },
                    { x: 5, y: -2, o: 0.6 },
                    { x: -1, y: 6, o: 0.55 },
                    { x: 4, y: -5, o: 0.35 },
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [pos.y, pos.y + 3, pos.y], x: [pos.x, pos.x - 2, pos.x] }}
                      transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
                      style={{ opacity: pos.o + 0.3 }}
                    >
                      <div className="w-9 h-9 rounded-full border-2 border-dashed border-white/30 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <h4 className="font-bold text-2xl mb-2 text-red-400/80">Fragmentado.</h4>
                <p className="text-sm text-text-muted">Complejo. Reactivo. Costoso.</p>
              </div>
            </div>

            {/* Mobile arrow */}
            <div className="flex sm:hidden justify-center -my-2 z-20">
              <motion.div
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center rotate-90"
                style={{ boxShadow: '0 0 25px rgba(163,163,32,0.35)' }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <ArrowRight className="text-white" size={18} />
              </motion.div>
            </div>

            {/* Unificado */}
            <motion.div
              className="p-8 rounded-2xl border border-accent/30 text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(163,163,32,0.1) 0%, rgba(10,14,8,0.95) 50%, rgba(200,200,64,0.08) 100%)',
                boxShadow: '0 0 40px rgba(163,163,32,0.08)',
              }}
              animate={{ boxShadow: ['0 0 30px rgba(163,163,32,0.06)', '0 0 50px rgba(163,163,32,0.12)', '0 0 30px rgba(163,163,32,0.06)'] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 80px rgba(163,163,32,0.04)' }} />
              <div className="relative z-10">
                {/* Connected network SVG */}
                <div className="flex justify-center mb-5 h-14 items-center">
                  <svg width="180" height="56" viewBox="0 0 180 56" fill="none">
                    {/* Connection lines */}
                    <line x1="28" y1="28" x2="90" y2="12" stroke="rgba(163,163,32,0.35)" strokeWidth="1.5" />
                    <line x1="28" y1="28" x2="90" y2="44" stroke="rgba(163,163,32,0.35)" strokeWidth="1.5" />
                    <line x1="152" y1="28" x2="90" y2="12" stroke="rgba(163,163,32,0.35)" strokeWidth="1.5" />
                    <line x1="152" y1="28" x2="90" y2="44" stroke="rgba(163,163,32,0.35)" strokeWidth="1.5" />
                    <line x1="90" y1="12" x2="90" y2="44" stroke="rgba(163,163,32,0.25)" strokeWidth="1" />
                    <line x1="28" y1="28" x2="152" y2="28" stroke="rgba(163,163,32,0.15)" strokeWidth="1" strokeDasharray="4 3" />
                    {/* Outer nodes */}
                    <circle cx="28" cy="28" r="8" fill="rgba(163,163,32,0.15)" stroke="rgba(163,163,32,0.5)" strokeWidth="1.5" />
                    <circle cx="90" cy="12" r="7" fill="rgba(163,163,32,0.15)" stroke="rgba(163,163,32,0.5)" strokeWidth="1.5" />
                    <circle cx="90" cy="44" r="7" fill="rgba(163,163,32,0.15)" stroke="rgba(163,163,32,0.5)" strokeWidth="1.5" />
                    <circle cx="152" cy="28" r="8" fill="rgba(163,163,32,0.15)" stroke="rgba(163,163,32,0.5)" strokeWidth="1.5" />
                    {/* Center hub - pulsing */}
                    <motion.circle
                      cx="90" cy="28" r="14"
                      fill="rgba(163,163,32,0.12)"
                      stroke="rgba(163,163,32,0.6)"
                      strokeWidth="2"
                      animate={{ r: [14, 15.5, 14] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <text x="90" y="32" textAnchor="middle" fill="rgba(200,200,64,0.9)" fontSize="9" fontWeight="bold">HSC</text>
                    {/* Glow on center */}
                    <circle cx="90" cy="28" r="22" fill="rgba(163,163,32,0.04)" />
                    {/* Small dots on nodes */}
                    <circle cx="28" cy="28" r="3" fill="rgba(200,200,64,0.6)" />
                    <circle cx="152" cy="28" r="3" fill="rgba(200,200,64,0.6)" />
                    <circle cx="90" cy="12" r="2.5" fill="rgba(200,200,64,0.5)" />
                    <circle cx="90" cy="44" r="2.5" fill="rgba(200,200,64,0.5)" />
                  </svg>
                </div>
                <h4 className="font-bold text-2xl mb-2 text-accent-light">Unificado. Simple.</h4>
                <p className="text-sm text-text-muted">Inteligente. Predictivo. Escalable.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
