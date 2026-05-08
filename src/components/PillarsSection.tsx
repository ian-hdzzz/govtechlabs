import { motion } from 'framer-motion'
import { Layers, Brain, Shield } from 'lucide-react'

const pillars = [
  {
    icon: Layers,
    title: 'De Fragmentado a Unificado',
    desc: 'Desmantelamos los silos donde los datos quedan atrapados, creando un flujo de datos líquido que informa cada acción departamental en tiempo real.',
  },
  {
    icon: Brain,
    title: 'Sinergia Humano-IA',
    desc: 'La automatización no reemplaza; aumenta. Nuestra plataforma maneja el 80% de tareas repetitivas, permitiendo a los líderes enfocarse en el 20% que requiere empatía y criterio.',
  },
  {
    icon: Shield,
    title: 'Resiliencia Escalable',
    desc: 'Diseñado para instituciones que no pueden fallar. Arquitectura de alta disponibilidad con capas de seguridad zero-trust protegiendo cada interacción ciudadana.',
  },
]

export default function PillarsSection() {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Pilares de Integración Estratégica</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-bg-card border border-border-default hover:border-accent/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <pillar.icon className="text-accent-light" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
