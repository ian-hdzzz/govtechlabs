import { motion } from 'framer-motion'
import { Activity, Eye, Network, Shield, Cpu, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ArgusLogo, { ARGUS_COLOR, ARGUS_ACCENT } from '@/components/logos/ArgusLogo'

const capabilities = [
  { icon: Eye, label: 'Observabilidad institucional' },
  { icon: Activity, label: 'SOC/NOC autónomo' },
  { icon: Cpu, label: 'AI threat detection' },
  { icon: Zap, label: 'Respuesta automatizada' },
  { icon: Network, label: 'Monitoreo de infraestructura crítica' },
  { icon: Shield, label: 'Resiliencia operacional' },
]

const systemNodes = [
  { id: 'supra', label: 'supra.', status: 'nominal', x: 20, y: 15 },
  { id: 'hydra', label: 'hydra.', status: 'nominal', x: 65, y: 15 },
  { id: 'atlas', label: 'atlas.', status: 'nominal', x: 20, y: 55 },
  { id: 'agora', label: 'ágora.', status: 'nominal', x: 65, y: 55 },
]

const eventStream = [
  { ts: '00:03', msg: 'Escaneo de red completado — 0 anomalías detectadas' },
  { ts: '00:11', msg: 'Evento de autenticación inusual — resuelto automáticamente' },
  { ts: '00:24', msg: '4 endpoints sincronizados con éxito' },
  { ts: '00:37', msg: 'Telemetría actualizada — latencia 312ms' },
]

export default function ProductArgus() {
  return (
    <section id="argus" className="py-24 bg-bg-primary relative scroll-mt-20">
      {/* Subtle scan-line ambiance */}
      <div className="absolute inset-0 pointer-events-none opacity-20 grid-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── Visual mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div
              className="rounded-2xl overflow-hidden bg-bg-card border p-3 sm:p-6"
              style={{
                borderColor: `${ARGUS_COLOR}60`,
                boxShadow: `0 0 30px ${ARGUS_COLOR}33, 0 0 60px ${ARGUS_COLOR}11`,
              }}
            >
              <div className="bg-bg-primary rounded-xl p-4 sm:p-6">
                {/* Window chrome */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-text-muted ml-2 font-mono">ARGUS — Live Telemetry</span>
                  <span
                    className="ml-auto text-[9px] font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${ARGUS_ACCENT}22`, color: ARGUS_ACCENT }}
                  >
                    ACTIVO
                  </span>
                </div>

                {/* System status grid */}
                <div className="mb-4">
                  <div className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-2">
                    Estado del Ecosistema
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {systemNodes.map((node, i) => (
                      <motion.div
                        key={node.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.08 }}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-bg-card border border-border-default"
                      >
                        <span className="text-xs font-bold text-text-secondary">{node.label}</span>
                        <div className="flex items-center gap-1.5">
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: ARGUS_ACCENT }}
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          />
                          <span className="text-[9px]" style={{ color: ARGUS_ACCENT }}>nominal</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Event stream */}
                <div className="mb-4">
                  <div className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-2">
                    Flujo de Eventos
                  </div>
                  <div
                    className="rounded-lg p-3 space-y-1.5 font-mono"
                    style={{ backgroundColor: `${ARGUS_COLOR}18`, border: `1px solid ${ARGUS_COLOR}30` }}
                  >
                    {eventStream.map((ev, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-[9px] shrink-0" style={{ color: `${ARGUS_ACCENT}80` }}>
                          +{ev.ts}
                        </span>
                        <span className="text-[9px] text-text-muted leading-relaxed">{ev.msg}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Automation status */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest">
                      Automatización de Respuesta
                    </span>
                    <span className="text-[9px] font-bold" style={{ color: ARGUS_ACCENT }}>78%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-bg-card overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: ARGUS_ACCENT }}
                      initial={{ width: '0%' }}
                      whileInView={{ width: '78%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Text content ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <ArgusLogo size="lg" />
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest ml-auto"
                style={{
                  backgroundColor: `${ARGUS_COLOR}25`,
                  border: `1px solid ${ARGUS_COLOR}50`,
                  color: ARGUS_ACCENT,
                }}
              >
                Capa de Observabilidad Transversal
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Plataforma Autónoma de Observabilidad y Defensa Institucional
            </h3>

            <p className="text-text-secondary mb-4 leading-relaxed">
              ARGUS es la capa de observabilidad y resiliencia del ecosistema GovTech Lab. Integra monitoreo institucional, detección autónoma de amenazas, observabilidad operacional y respuesta inteligente para proteger infraestructura crítica y garantizar continuidad operativa.
            </p>

            <p className="text-text-secondary mb-8 leading-relaxed text-sm">
              No vende ciberseguridad. Provee <span className="text-text-primary font-medium">continuidad institucional</span>, <span className="text-text-primary font-medium">resiliencia operacional</span> e <span className="text-text-primary font-medium">inteligencia operativa AI-native</span> en tiempo real.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${ARGUS_COLOR}30`, border: `1px solid ${ARGUS_COLOR}50` }}
                  >
                    <cap.icon size={14} style={{ color: ARGUS_ACCENT }} />
                  </div>
                  <p className="text-text-secondary text-sm">{cap.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5215510635993?text=Hola%2C%20me%20interesa%20una%20demo%20de%20ARGUS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="rounded-full"
                  style={{ backgroundColor: ARGUS_COLOR }}
                >
                  Solicitar Demo
                </Button>
              </a>
              <a
                href="https://wa.me/5215510635993?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20las%20especificaciones%20t%C3%A9cnicas%20de%20ARGUS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="rounded-full">
                  Especificaciones Técnicas
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
