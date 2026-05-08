import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const impacts = [
  '65% Reduction in administrative processing time.',
  '99.9% uptime for essential public infrastructure.',
  'Seamless integration with 200+ banking and SPEI channels.',
]

export default function ImpactSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent-secondary/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-mono text-accent-light mb-4 tracking-widest">THE IMPACT</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Efficiency measured in{' '}
              <span className="gradient-text">human progress.</span>
            </h2>

            <div className="space-y-4">
              {impacts.map((impact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-accent-light mt-0.5 shrink-0" size={20} />
                  <p className="text-text-secondary">{impact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-bg-card border border-border-default glow-border">
              <div className="w-full h-full bg-gradient-to-br from-accent/5 via-bg-card to-accent-secondary/5 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8 w-full">
                  <div className="h-24 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-light">65%</div>
                      <div className="text-xs text-text-muted">Reducción</div>
                    </div>
                  </div>
                  <div className="h-24 rounded-xl bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-light">99.9%</div>
                      <div className="text-xs text-text-muted">Uptime</div>
                    </div>
                  </div>
                  <div className="h-24 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-light">200+</div>
                      <div className="text-xs text-text-muted">Canales</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
