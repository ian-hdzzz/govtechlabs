import { motion } from 'framer-motion'
import { Building2, Users } from 'lucide-react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { SUPRA_COLOR } from '@/components/logos/SupraLogo'
import { HYDRA_COLOR } from '@/components/logos/HydraLogo'
import { MARIA_COLOR } from '@/components/logos/MariaLogo'
import { AGORA_COLOR } from '@/components/logos/AgoraLogo'

const products = [
  { name: 'marIA.', desc: 'Interfaz conversacional omnicanal', color: MARIA_COLOR, href: '#maria' },
  { name: 'ágora.', desc: 'Plataforma de atención y gestión ciudadana', color: AGORA_COLOR, href: '#agora' },
  { name: 'supra.', desc: 'Pagos y recaudación institucional', color: SUPRA_COLOR, href: '#supra' },
  { name: 'hydra.', desc: 'Gestión operativa de infraestructura pública', color: HYDRA_COLOR, href: '#hydra' },
  { name: 'atlas.', desc: 'Sistema administrativo y financiero (ERP)', color: '#2B3A67', href: '#productos' },
]

const features = [
  {
    title: 'Instituciones Unificadas',
    desc: 'Centraliza la gestión fiscal, la participación ciudadana y la infraestructura física en un núcleo hiperconectado.',
  },
  {
    title: 'Flujo de Cliente Sin Fricción',
    desc: 'Desde métodos de pago hasta comunicación omnicanal, la experiencia del cliente se mantiene fluida en todos los puntos de contacto.',
  },
  {
    title: 'Operaciones Autónomas',
    desc: 'Impulsadas por MarIA y Ágora, las interacciones rutinarias son manejadas por agentes inteligentes, liberando talento humano para decisiones estratégicas.',
  },
]

export default function PlatformOverview() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              La Plataforma para{' '}
              <span className="gradient-text">instituciones inteligentes</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Un ecosistema integrado que conecta cada módulo operativo de tu institución.
            </p>
          </>
        }
      >
        {/* Platform diagram inside the scroll card */}
        <div className="h-full w-full p-4 md:p-8 flex flex-col justify-between">
          {/* Top: Institution ↔ Client */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[rgba(163,163,32,0.2)] border border-[rgba(163,163,32,0.3)] flex items-center justify-center">
                <Building2 className="text-accent-light" size={24} />
              </div>
              <span className="text-lg font-semibold text-text-primary">Institución</span>
            </div>
            <div className="flex-1 mx-6 border-t border-dashed border-[rgba(163,163,32,0.3)]" />
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-text-primary">Cliente</span>
              <div className="w-12 h-12 rounded-xl bg-[rgba(163,163,32,0.2)] border border-[rgba(163,163,32,0.3)] flex items-center justify-center">
                <Users className="text-accent-light" size={24} />
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 flex-1 items-center">
            {products.map((product) => (
              <motion.a
                href={product.href}
                key={product.name}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl p-3 sm:p-4 text-center cursor-pointer text-white h-full flex flex-col justify-center min-h-[70px] sm:min-h-[100px]"
                style={{ backgroundColor: product.color }}
              >
                <div className="text-base sm:text-lg md:text-xl font-black">{product.name}</div>
                <div className="text-[10px] sm:text-xs opacity-80 mt-1 line-clamp-2">{product.desc}</div>
              </motion.a>
            ))}
          </div>

          {/* Bottom: HSC label */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f1410] border border-[rgba(163,163,32,0.2)]">
              <span className="text-xs font-black text-accent-light">human software corporation</span>
              <span className="text-xs italic text-accent-light/60">ai solutions</span>
            </div>
          </div>
        </div>
      </ContainerScroll>

      {/* Features below the scroll animation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24 -mt-40">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <h3 className="text-xl font-bold text-accent-light italic mb-2">{feature.title}</h3>
              <p className="text-text-secondary">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
