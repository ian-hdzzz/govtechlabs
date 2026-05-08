import { motion } from 'framer-motion'
import { Workflow, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AgoraLogo, { AGORA_COLOR } from '@/components/logos/AgoraLogo'

import agoraConversaciones from '@/assets/agora/agora-conversaciones.png'
import agoraConsumos from '@/assets/agora/agora-consumos.png'
import agoraLecturas from '@/assets/agora/agora-lecturas.png'
import agoraReportes from '@/assets/agora/agora-reportes.png'

const features = [
  { icon: Workflow, title: 'Motor de Workflows', desc: 'Mapeo integral de tareas y enrutamiento automatizado, creando flujos de trabajo a nivel de servicio.' },
  { icon: Database, title: 'Integración de Sistemas', desc: 'Conexión transparente con ERPs y bases de datos existentes.' },
]

const screens = [
  { src: agoraConversaciones, alt: 'Ágora - Conversaciones WhatsApp', label: 'Conversaciones Omnicanal' },
  { src: agoraConsumos, alt: 'Ágora - Consumos de contrato', label: 'Gestión de Consumos' },
  { src: agoraLecturas, alt: 'Ágora - Historial de lecturas', label: 'Historial de Lecturas' },
  { src: agoraReportes, alt: 'Ágora - Reportes de tickets', label: 'Reportes y Analítica' },
]

export default function ProductAgora() {
  return (
    <section id="agora" className="py-24 bg-bg-secondary relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Info + Main screenshot */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl bg-bg-card border border-border-default hover:border-[#D94F2B]/30 transition-all">
                  <feature.icon className="mb-3" size={28} style={{ color: AGORA_COLOR }} />
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-text-secondary text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="https://wa.me/5215510635993?text=Hola%2C%20me%20interesa%20una%20demo%20de%20Ágora" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full" style={{ backgroundColor: AGORA_COLOR }}>Solicitar Demo</Button>
              </a>
              <a href="https://wa.me/5215510635993?text=Hola%2C%20quiero%20saber%20más%20sobre%20Ágora" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full">Más Información</Button>
              </a>
            </div>
          </motion.div>

          {/* Main screenshot — Conversaciones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl opacity-25 blur-xl" style={{ background: `linear-gradient(135deg, ${AGORA_COLOR}50, transparent)` }} />
              <div className="relative rounded-2xl overflow-hidden border border-border-default shadow-2xl">
                <img
                  src={agoraConversaciones}
                  alt="Ágora - Panel de conversaciones"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-bg-card border border-border-default shadow-lg">
                <span className="text-xs font-semibold text-text-muted">Conversaciones Omnicanal</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: More screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <span className="text-xs font-mono tracking-widest uppercase text-text-muted">Módulos de Gestión</span>
            <h4 className="text-xl sm:text-2xl font-bold mt-2">
              Control total de <span style={{ color: AGORA_COLOR }}>operaciones y reportes</span>
            </h4>
          </div>

          {/* Top row: 2 large screenshots */}
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {[screens[1], screens[2]].map((screen, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div className="absolute -inset-0.5 rounded-2xl opacity-15 blur-md" style={{ background: AGORA_COLOR }} />
                <div className="relative rounded-2xl overflow-hidden border border-border-default shadow-xl">
                  <img src={screen.src} alt={screen.alt} className="w-full h-auto rounded-2xl" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-bg-card border border-border-default shadow-lg whitespace-nowrap">
                  <span className="text-[11px] font-semibold text-text-muted">{screen.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Bottom: Full-width screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            whileHover={{ y: -5 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute -inset-0.5 rounded-2xl opacity-15 blur-md" style={{ background: AGORA_COLOR }} />
            <div className="relative rounded-2xl overflow-hidden border border-border-default shadow-xl">
              <img src={screens[3].src} alt={screens[3].alt} className="w-full h-auto rounded-2xl" />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-bg-card border border-border-default shadow-lg whitespace-nowrap">
              <span className="text-[11px] font-semibold text-text-muted">{screens[3].label}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
