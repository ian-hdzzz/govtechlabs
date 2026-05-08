import { motion } from 'framer-motion'
import { CreditCard, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SupraLogo, { SUPRA_COLOR } from '@/components/logos/SupraLogo'

import supraAdmin from '@/assets/supra/supra-admin.png'
import supraCliente1 from '@/assets/supra/supra-cliente-1.png'
import supraCliente2 from '@/assets/supra/supra-cliente-2.png'
import supraCliente3 from '@/assets/supra/supra-cliente-3.png'
import supraCliente4 from '@/assets/supra/supra-cliente-4.png'

const features = [
  { icon: CreditCard, title: 'Recaudación', desc: 'Procesamiento de cobros multicanal con conciliación automática.' },
  { icon: Zap, title: 'Integración', desc: 'Conexión directa de SPEI con plataformas gubernamentales y bancarias.' },
]

const clientScreens = [
  { src: supraCliente1, alt: 'Portal del cliente - Bienvenida' },
  { src: supraCliente2, alt: 'Portal del cliente - Adeudos' },
  { src: supraCliente3, alt: 'Portal del cliente - Métodos de pago' },
  { src: supraCliente4, alt: 'Portal del cliente - Pago exitoso' },
]

export default function ProductSupra() {
  return (
    <section id="supra" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Info + Admin panel */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="https://wa.me/5215510635993?text=Hola%2C%20me%20interesa%20una%20demo%20de%20Supra" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full" style={{ backgroundColor: SUPRA_COLOR }}>Solicitar Demo</Button>
              </a>
              <a href="https://wa.me/5215510635993?text=Hola%2C%20quiero%20saber%20más%20sobre%20Supra" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full">Más Información</Button>
              </a>
            </div>
          </motion.div>

          {/* Admin panel screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl opacity-30 blur-xl" style={{ background: `linear-gradient(135deg, ${SUPRA_COLOR}40, transparent)` }} />
              <div className="relative rounded-2xl overflow-hidden border border-border-default shadow-2xl">
                <img
                  src={supraAdmin}
                  alt="SUPRA - Panel de administración"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-bg-card border border-border-default shadow-lg">
                <span className="text-xs font-semibold text-text-muted">Vista Administrativa</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Client mobile screens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <span className="text-xs font-mono tracking-widest uppercase text-text-muted">Portal del Cliente</span>
            <h4 className="text-xl sm:text-2xl font-bold mt-2">
              Experiencia de pago <span style={{ color: SUPRA_COLOR }}>fluida y segura</span>
            </h4>
          </div>

          {/* Mobile screens fan layout */}
          <div className="flex justify-center items-end gap-3 sm:gap-5 md:gap-6 overflow-hidden px-4">
            {clientScreens.map((screen, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative flex-shrink-0"
                style={{
                  width: 'clamp(140px, 20vw, 200px)',
                  transform: `rotate(${(i - 1.5) * 3}deg)`,
                  zIndex: i === 1 || i === 2 ? 10 : 5,
                }}
              >
                <div
                  className="absolute -inset-0.5 rounded-[20px] opacity-20 blur-md"
                  style={{ background: SUPRA_COLOR }}
                />
                <div className="relative rounded-[18px] overflow-hidden border-2 border-white/10 shadow-2xl bg-white">
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
