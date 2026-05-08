import { motion } from 'framer-motion'
import { Workflow, Database } from 'lucide-react'
import AgoraLogo, { AGORA_COLOR } from '@/components/logos/AgoraLogo'

const features = [
  { icon: Workflow, title: 'Motor de Workflows', desc: 'Mapeo integral de tareas y enrutamiento automatizado, creando flujos de trabajo a nivel de servicio.' },
  { icon: Database, title: 'Integración de Sistemas', desc: 'Conexión transparente con ERPs y bases de datos existentes.' },
]

export default function ProductAgora() {
  return (
    <section id="agora" className="py-24 bg-bg-secondary relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AgoraLogo size="lg" className="mb-4" />
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
                      <span className={`text-xs px-2 py-0.5 rounded-full ${i === 0 ? 'bg-green-500/20 text-green-400' : i === 1 ? 'bg-yellow-500/20 text-yellow-400' : ''}`} style={i === 2 ? { background: `${AGORA_COLOR}33`, color: AGORA_COLOR } : {}}>
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
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl bg-bg-card border border-border-default hover:border-[#D94F2B]/30 transition-all">
                <feature.icon className="mb-3" size={28} style={{ color: AGORA_COLOR }} />
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-text-secondary text-sm">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
