import { motion } from 'framer-motion'
import { MessageSquare, Phone, Headphones } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MariaLogo, { MARIA_COLOR } from '@/components/logos/MariaLogo'

const features = [
  { icon: MessageSquare, label: 'Conversación Natural', desc: 'Procesamiento de lenguaje natural avanzado' },
  { icon: Phone, label: 'Multicanal', desc: 'WhatsApp, Web, Redes Sociales' },
]

export default function ProductMaria() {
  return (
    <section id="maria" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <MariaLogo size="lg" className="mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Agente Inteligente Omnicanal de Atención Ciudadana
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Interfaz conversacional que permite a ciudadanos interactuar con instituciones a través de WhatsApp, redes sociales y canales digitales, automatizando consultas, trámites y servicios en tiempo real.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.label} className="p-4 rounded-xl bg-bg-card border border-border-default hover:border-[#5B6FF5]/30 transition-all">
                  <feature.icon className="mb-2" size={24} style={{ color: MARIA_COLOR }} />
                  <h4 className="font-semibold text-sm">{feature.label}</h4>
                  <p className="text-xs text-text-muted mt-1">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="https://wa.me/5215510635993?text=Hola%2C%20me%20interesa%20una%20demo%20de%20MarIA" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full" style={{ backgroundColor: MARIA_COLOR }}>Solicitar Demo</Button>
              </a>
              <a href="https://wa.me/5215510635993?text=Hola%2C%20quiero%20saber%20más%20sobre%20MarIA" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full">Más Información</Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden bg-bg-card border border-border-default glow-border p-3 sm:p-6">
              <div className="bg-bg-primary rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-text-muted ml-2 font-mono">marIA - Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="p-3 rounded-lg bg-bg-card border border-border-default text-center">
                      <div className="text-xs text-text-muted">Active Agents</div>
                      <div className="text-lg font-bold">0/1</div>
                    </div>
                    <div className="p-3 rounded-lg bg-bg-card border border-border-default text-center">
                      <div className="text-xs text-text-muted">Tokens</div>
                      <div className="text-lg font-bold">427.9K</div>
                    </div>
                    <div className="p-3 rounded-lg bg-bg-card border border-border-default text-center">
                      <div className="text-xs text-text-muted">Cost (30d)</div>
                      <div className="text-lg font-bold" style={{ color: MARIA_COLOR }}>$1.31</div>
                    </div>
                  </div>
                  <div className="h-32 rounded-lg bg-bg-card border border-border-default p-4">
                    <div className="text-xs text-text-muted mb-2">Token Usage Over Time</div>
                    <div className="flex items-end gap-1 h-20">
                      {[20, 35, 25, 45, 30, 60, 40, 55, 70, 50, 65, 80, 45, 55].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t"
                          style={{ height: `${h}%`, background: `linear-gradient(to top, ${MARIA_COLOR}66, ${MARIA_COLOR})` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-bg-card border border-border-default">
                    <div className="flex items-center gap-2 mb-2">
                      <Headphones size={16} style={{ color: MARIA_COLOR }} />
                      <span className="text-sm font-medium">Agents</span>
                    </div>
                    <div className="p-2 rounded bg-bg-primary border border-border-default">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Maria</span>
                        <span className="text-xs text-green-400">Active</span>
                      </div>
                      <p className="text-xs text-text-muted mt-1">AI customer service assistant for CEA Querétaro water utility</p>
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
