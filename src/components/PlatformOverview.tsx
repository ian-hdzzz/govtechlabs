import { motion } from 'framer-motion'
import { Building2, Users } from 'lucide-react'

const products = [
  { name: 'supra.', desc: 'Pagos y recaudación institucional', color: 'bg-supra', textColor: 'text-white' },
  { name: 'hydra.', desc: 'Gestión operativa de infraestructura pública', color: 'bg-hydra', textColor: 'text-white' },
  { name: 'atlas.', desc: 'Sistema administrativo y financiero (ERP)', color: 'bg-[#1e3a5f]', textColor: 'text-white' },
  { name: 'marIA.', desc: 'Interfaz conversacional omnicanal', color: 'bg-maria', textColor: 'text-white' },
  { name: 'ágora.', desc: 'Plataforma de atención y gestión ciudadana', color: 'bg-agora', textColor: 'text-white' },
]

const features = [
  {
    title: 'Unifying Institutions',
    desc: 'Centralize fiscal management, citizen engagement, and physical infrastructure into one hyper-connected core.',
  },
  {
    title: 'Seamless Client Flow',
    desc: 'From payment methods to omnichannel communication, the client experience remains frictionless across all touchpoints.',
  },
  {
    title: 'Autonomous Operations',
    desc: 'Powered by MarIA and Agora, routine interactions are handled by intelligent agents, freeing human talent for strategic decisions.',
  },
]

export default function PlatformOverview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {features.map((feature, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold text-accent-light italic mb-2">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-bg-card rounded-3xl border border-border-default p-8 glow-border">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <Building2 className="text-accent-light" size={24} />
                  </div>
                  <span className="text-lg font-semibold">Institución</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <Users className="text-accent-light" size={24} />
                  </div>
                  <span className="text-lg font-semibold">Cliente</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {products.map((product, i) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`${product.color} ${product.textColor} rounded-xl p-4 text-center hover:scale-105 transition-transform cursor-pointer`}
                  >
                    <div className="text-lg font-bold">{product.name}</div>
                    <div className="text-xs opacity-80 mt-1">{product.desc}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-primary border border-border-default">
                  <span className="text-xs font-mono text-text-muted">HUMAN SOFTWARE CORPORATION</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
