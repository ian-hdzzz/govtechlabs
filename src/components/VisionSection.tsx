import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

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
                    { x: -6, y: 4, o: 0.25 },
                    { x: 3, y: -7, o: 0.45 },
                    { x: -4, y: 8, o: 0.2 },
                    { x: 5, y: -2, o: 0.35 },
                    { x: -1, y: 6, o: 0.3 },
                    { x: 4, y: -5, o: 0.15 },
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [pos.y, pos.y + 3, pos.y], x: [pos.x, pos.x - 2, pos.x] }}
                      transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
                      style={{ opacity: pos.o + 0.3 }}
                    >
                      <div className="w-9 h-9 rounded-full border-2 border-dashed border-red-500/30 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-red-500/25" />
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
