import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import HydraLogo, { HYDRA_COLOR } from '@/components/logos/HydraLogo'

import hydraFactibilidades from '@/assets/hydra/hydra-factibilidades.png'
import hydraPortalFacturas from '@/assets/hydra/hydra-portal-facturas.png'
import hydraPortalTramites from '@/assets/hydra/hydra-portal-tramites.png'

const features = [
  'Gestión completa de padrón de usuarios y contratos.',
  'Control de cuotas fijas y órdenes de mantenimiento preventivo.',
  'Módulo de Acceso Ciudadano multifacético.',
]

const screens = [
  { src: hydraFactibilidades, alt: 'Hydra - Gestión de factibilidades', label: 'Panel Administrativo' },
  { src: hydraPortalFacturas, alt: 'Hydra - Portal de facturas', label: 'Portal de Facturas' },
  { src: hydraPortalTramites, alt: 'Hydra - Trámites digitales', label: 'Trámites Digitales' },
]

export default function ProductHydra() {
  return (
    <section id="hydra" className="py-24 bg-bg-secondary relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Info + Main screenshot */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Main screenshot — left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl opacity-25 blur-xl" style={{ background: `linear-gradient(135deg, ${HYDRA_COLOR}50, transparent)` }} />
              <div className="relative rounded-2xl overflow-hidden border border-border-default shadow-2xl">
                <img
                  src={hydraFactibilidades}
                  alt="HYDRA - Panel administrativo de factibilidades"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-bg-card border border-border-default shadow-lg">
                <span className="text-xs font-semibold text-text-muted">Panel Administrativo</span>
              </div>
            </div>
          </motion.div>

          {/* Text content — right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <HydraLogo size="lg" className="mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Sistema de Gestión Operativa de Infraestructura de Servicios Públicos
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Plataforma que administra la operación de servicios públicos, incluyendo contratos, lecturas de consumo, órdenes de trabajo y facturación, conectándose con infraestructura física como medidores y sensores.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 shrink-0" size={18} style={{ color: HYDRA_COLOR }} />
                  <p className="text-text-secondary text-sm">{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5215510635993?text=Hola%2C%20me%20interesa%20una%20demo%20de%20Hydra" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full" style={{ backgroundColor: HYDRA_COLOR }}>Solicitar Demo</Button>
              </a>
              <a href="https://wa.me/5215510635993?text=Hola%2C%20me%20gustaría%20recibir%20las%20especificaciones%20técnicas%20de%20Hydra" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full">Especificaciones Técnicas</Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Portal screenshots side by side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <span className="text-xs font-mono tracking-widest uppercase text-text-muted">Portal Ciudadano</span>
            <h4 className="text-xl sm:text-2xl font-bold mt-2">
              Acceso digital para <span style={{ color: HYDRA_COLOR }}>trámites y facturación</span>
            </h4>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[screens[1], screens[2]].map((screen, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div className="absolute -inset-0.5 rounded-2xl opacity-15 blur-md" style={{ background: HYDRA_COLOR }} />
                <div className="relative rounded-2xl overflow-hidden border border-border-default shadow-xl">
                  <img src={screen.src} alt={screen.alt} className="w-full h-auto rounded-2xl" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-bg-card border border-border-default shadow-lg">
                  <span className="text-[11px] font-semibold text-text-muted">{screen.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
