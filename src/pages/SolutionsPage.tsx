import { motion } from 'framer-motion'
import { MessageSquare, Phone, Database, Workflow, Headphones } from 'lucide-react'

const mariaFeatures = [
  { icon: MessageSquare, label: 'Conversación Natural', desc: 'NLP avanzado' },
  { icon: Phone, label: 'Multicanal', desc: 'WhatsApp, Web, Social' },
]

const agoraFeatures = [
  { icon: Workflow, title: 'Workflow Engine', desc: 'Comprehensive task mapping and automated task routing, creating service-level workflows.' },
  { icon: Database, title: 'Systems Integration', desc: 'Seamless connection with existing ERPs and databases.' },
]

const agoraStats = [
  { value: '99.9%', label: 'Uptime Reliability' },
  { value: '<200ms', label: 'Response Latency' },
  { value: '256-bit', label: 'Military Encryption' },
  { value: '24/7', label: 'Automated Support' },
]

export default function SolutionsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 relative overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-maria-accent/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="text-xs font-mono text-accent-light mb-4 tracking-widest">INSTITUTIONAL OPERATING SYSTEM</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            Transforming Complex Workflows into{' '}
            <span className="gradient-text">Unified Simplicity</span>
          </h1>
          <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
            A dual-engine platform designed to orchestrate citizen interactions and institutional management with superhuman precision.
          </p>
        </div>
      </section>

      {/* MARIA */}
      <section id="maria" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black mb-2">
                <span style={{ color: '#312e81' }}>mar</span><span style={{ color: '#312e81' }}>IA</span><span className="text-maria-accent">.</span>
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Agente Inteligente Omnicanal de Atención Ciudadana
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Interfaz conversacional que permite a ciudadanos interactuar con instituciones a través de WhatsApp, redes sociales y canales digitales, automatizando consultas, trámites y servicios en tiempo real.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {mariaFeatures.map((feature) => (
                  <div key={feature.label} className="p-4 rounded-xl bg-bg-card border border-border-default hover:border-maria-accent/30 transition-all">
                    <feature.icon className="text-maria-accent mb-2" size={24} />
                    <h4 className="font-semibold text-sm">{feature.label}</h4>
                    <p className="text-xs text-text-muted mt-1">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden bg-bg-card border border-border-default glow-border p-6">
                <div className="bg-bg-primary rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-text-muted ml-2 font-mono">marIA - Dashboard</span>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-lg bg-bg-card border border-border-default text-center">
                        <div className="text-xs text-text-muted">Active Agents</div>
                        <div className="text-lg font-bold">0/1</div>
                      </div>
                      <div className="p-3 rounded-lg bg-bg-card border border-border-default text-center">
                        <div className="text-xs text-text-muted">Tokens</div>
                        <div className="text-lg font-bold">427.9K</div>
                      </div>
                      <div className="p-3 rounded-lg bg-bg-card border border-border-default text-center">
                        <div className="text-xs text-text-muted">Cost (30 days)</div>
                        <div className="text-lg font-bold text-maria-accent">$1.3191</div>
                      </div>
                    </div>

                    <div className="h-32 rounded-lg bg-bg-card border border-border-default p-4">
                      <div className="text-xs text-text-muted mb-2">Token Usage Over Time</div>
                      <div className="flex items-end gap-1 h-20">
                        {[20, 35, 25, 45, 30, 60, 40, 55, 70, 50, 65, 80, 45, 55].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-gradient-to-t from-maria-accent/40 to-maria-accent"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-bg-card border border-border-default">
                      <div className="flex items-center gap-2 mb-2">
                        <Headphones className="text-maria-accent" size={16} />
                        <span className="text-sm font-medium">Agents</span>
                      </div>
                      <div className="p-2 rounded bg-bg-primary border border-border-default">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Maria</span>
                          <span className="text-xs text-green-400">Active</span>
                        </div>
                        <p className="text-xs text-text-muted mt-1">AI customer service assistant for citizen interactions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AGORA */}
      <section id="agora" className="py-24 bg-bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black mb-2">
                <span style={{ color: '#14b8a6' }}>ágora</span><span className="text-agora-accent">.</span>
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Plataforma de Atención y Gestión Ciudadana
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Motor de workflows que gestiona solicitudes, trámites y comunicación entre ciudadanos e instituciones, integrando información desde sistemas internos, ERPs y plataformas operativas.
              </p>

              <div className="rounded-2xl overflow-hidden bg-bg-card border border-border-default p-6">
                <div className="bg-bg-primary rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-text-muted ml-2 font-mono">ágora - Tickets</span>
                  </div>
                  <div className="space-y-2">
                    {['Ticket #1024 - Consulta de servicio', 'Ticket #1025 - Solicitud de trámite', 'Ticket #1026 - Reporte de falla'].map((ticket, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-bg-card border border-border-default">
                        <span className="text-sm">{ticket}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${i === 0 ? 'bg-green-500/20 text-green-400' : i === 1 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-agora-accent/20 text-agora-accent'}`}>
                          {i === 0 ? 'Resuelto' : i === 1 ? 'En Progreso' : 'Nuevo'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {agoraFeatures.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl bg-bg-card border border-border-default hover:border-agora-accent/30 transition-all">
                  <feature.icon className="text-agora-accent mb-3" size={28} />
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-text-secondary text-sm">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-bg-card border-y border-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {agoraStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-text-secondary mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
