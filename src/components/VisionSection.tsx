import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

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
              <div className="w-full h-full bg-gradient-to-br from-accent/10 via-bg-card to-accent-secondary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-accent/40" />
                  </div>
                  <p className="text-sm text-text-secondary">Infraestructura Inteligente</p>
                </div>
              </div>
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

          <div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-bg-card border border-border-default text-center">
              <div className="flex justify-center gap-2 mb-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-border-light flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-text-muted/30" />
                  </div>
                ))}
              </div>
              <h4 className="font-bold text-lg mb-1">Fragmentado.</h4>
              <p className="text-sm text-text-muted">Complejo. Reactivo. Costoso.</p>
            </div>

            <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20 text-center glow-border">
              <div className="flex justify-center mb-4">
                <div className="px-4 py-2 rounded-xl bg-accent/20 border border-accent/30">
                  <span className="text-sm font-semibold text-accent-light">human software corp</span>
                </div>
              </div>
              <h4 className="font-bold text-lg mb-1">Unificado. Simple.</h4>
              <p className="text-sm text-text-muted">Inteligente. Predictivo. Escalable.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
