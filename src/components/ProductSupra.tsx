import { motion } from 'framer-motion'
import { CreditCard, Zap, BarChart3 } from 'lucide-react'
import SupraLogo, { SUPRA_COLOR } from '@/components/logos/SupraLogo'

const features = [
  { icon: CreditCard, title: 'Recaudación', desc: 'Procesamiento de cobros multicanal con conciliación automática.' },
  { icon: Zap, title: 'Integración', desc: 'Conexión directa de SPEI con plataformas gubernamentales y bancarias.' },
]

export default function ProductSupra() {
  return (
    <section id="supra" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SupraLogo size="lg" className="mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Sistema Unificado de Pagos y Recaudación Automatizada
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Infraestructura de pagos institucional que permite generar adeudos y procesar pagos a través de SPEI, tarjetas y tiendas de conveniencia, integrándose con sistemas de facturación y ERPs.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="p-4 rounded-xl bg-bg-card border border-border-default hover:border-[#2B3A67]/40 transition-all">
                  <feature.icon className="mb-2" size={24} style={{ color: SUPRA_COLOR }} />
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-text-secondary">{feature.desc}</p>
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
                  <span className="text-xs text-text-muted ml-2 font-mono">SUPRA - Panel de Control</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-bg-card border border-border-default">
                    <div>
                      <div className="text-xs text-text-muted">Total Recaudado Hoy</div>
                      <div className="text-2xl font-bold" style={{ color: SUPRA_COLOR }}>$12,450.00</div>
                    </div>
                    <BarChart3 size={32} style={{ color: SUPRA_COLOR }} />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-bg-card border border-border-default text-center">
                      <div className="text-lg font-bold">42</div>
                      <div className="text-xs text-text-muted">Pagos</div>
                    </div>
                    <div className="p-3 rounded-lg bg-bg-card border border-border-default text-center">
                      <div className="text-lg font-bold">1,204</div>
                      <div className="text-xs text-text-muted">Cuentas</div>
                    </div>
                    <div className="p-3 rounded-lg bg-bg-card border border-border-default text-center">
                      <div className="text-lg font-bold text-green-400">68%</div>
                      <div className="text-xs text-text-muted">Eficiencia</div>
                    </div>
                  </div>
                  <div className="h-32 rounded-lg bg-bg-card border border-border-default p-4 flex items-end gap-1">
                    {[40, 65, 55, 80, 70, 90, 60, 75, 85, 95, 70, 80].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{ height: `${h}%`, background: `linear-gradient(to top, ${SUPRA_COLOR}99, ${SUPRA_COLOR})` }}
                      />
                    ))}
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
