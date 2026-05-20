import { motion } from 'framer-motion'
import { Building2, Users } from 'lucide-react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { SUPRA_COLOR } from '@/components/logos/SupraLogo'
import { HYDRA_COLOR } from '@/components/logos/HydraLogo'
import { MARIA_COLOR } from '@/components/logos/MariaLogo'
import { AGORA_COLOR } from '@/components/logos/AgoraLogo'
import { ARGUS_COLOR, ARGUS_ACCENT } from '@/components/logos/ArgusLogo'

const products = [
  { name: 'supra.', desc: 'Pagos y recaudación institucional', color: SUPRA_COLOR, href: '#supra' },
  { name: 'hydra.', desc: 'Infraestructura pública', color: HYDRA_COLOR, href: '#hydra' },
  { name: 'atlas.', desc: 'ERP institucional', color: '#2B3A67', href: '#productos' },
  { name: 'marIA.', desc: 'IA conversacional omnicanal', color: MARIA_COLOR, href: '#maria' },
  { name: 'ágora.', desc: 'Gestión ciudadana', color: AGORA_COLOR, href: '#agora' },
]

const categories = [
  { label: 'Infraestructura Física', style: { top: '10%', left: '24%', transform: 'rotate(-40deg)' } as React.CSSProperties },
  { label: 'Bancos y Métodos de Pago', style: { top: '10%', right: '18%', transform: 'rotate(40deg)' } as React.CSSProperties },
  { label: 'Canales de Comunicación', style: { top: '48%', right: '4%', transform: 'rotate(90deg)', transformOrigin: 'center' } as React.CSSProperties },
  { label: 'Automatización Digital', style: { bottom: '12%', right: '18%', transform: 'rotate(-35deg)' } as React.CSSProperties },
  { label: 'Sistemas Internos', style: { bottom: '12%', left: '22%', transform: 'rotate(35deg)' } as React.CSSProperties },
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

function ProductCard({ product, className, delay = 0 }: { product: typeof products[0]; className?: string; delay?: number }) {
  return (
    <motion.a
      href={product.href}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1, zIndex: 30 }}
      className={`rounded-xl px-4 py-2.5 text-center text-white z-10 min-w-[120px] lg:min-w-[140px] shadow-lg cursor-pointer block ${className ?? ''}`}
      style={{
        backgroundColor: product.color,
        boxShadow: `0 4px 20px ${product.color}44, 0 0 40px ${product.color}22`,
      }}
    >
      <div className="text-sm lg:text-base font-black">{product.name}</div>
      <div className="text-[9px] lg:text-[10px] opacity-80 mt-0.5">{product.desc}</div>
    </motion.a>
  )
}

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
        <div className="h-full w-full relative overflow-hidden">
          {/* Background glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-[400px] md:h-[400px] rounded-full bg-accent/5 blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-accent/10 blur-[40px]" />

          {/* ═══ DESKTOP DIAGRAM ═══ */}
          <div className="hidden md:flex h-full w-full relative items-center justify-center">

            {/* ── ARGUS outer ring — transversal observability layer ── */}
            <motion.div
              className="absolute w-[82%] aspect-square rounded-full"
              style={{
                border: `1px dashed ${ARGUS_COLOR}80`,
                boxShadow: `0 0 60px ${ARGUS_COLOR}18, inset 0 0 40px ${ARGUS_COLOR}08`,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
            />
            {/* ARGUS label — top-right corner, clear of product cards */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute top-[5%] right-[5%] flex flex-col items-end gap-0.5 z-20 pointer-events-none select-none"
            >
              <span className="text-[12px] font-black tracking-widest" style={{ color: ARGUS_ACCENT }}>
                argus.
              </span>
              <span className="text-[8px] uppercase tracking-widest text-text-muted font-semibold">
                capa de observabilidad
              </span>
            </motion.div>
            {/* ARGUS sensor nodes — cardinal points on outer ring */}
            {[
              { style: { top: '9%', left: '50%', transform: 'translateX(-50%)' } },
              { style: { bottom: '9%', left: '50%', transform: 'translateX(-50%)' } },
              { style: { top: '50%', left: '9%', transform: 'translateY(-50%)' } },
              { style: { top: '50%', right: '9%', transform: 'translateY(-50%)' } },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full z-10"
                style={{ ...pos.style, backgroundColor: ARGUS_ACCENT }}
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
              />
            ))}

            {/* Orbital ring */}
            <motion.div
              className="absolute w-[50%] aspect-square rounded-full border border-dashed border-accent/20"
              style={{ boxShadow: '0 0 80px rgba(163,163,32,0.06), inset 0 0 60px rgba(163,163,32,0.03)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            />
            {/* Second subtle ring */}
            <div
              className="absolute w-[52%] aspect-square rounded-full border border-accent/8"
              style={{ boxShadow: '0 0 40px rgba(163,163,32,0.04)' }}
            />

            {/* Horizontal connector line */}
            <div className="absolute top-[46%] left-[5%] right-[5%] h-px border-t border-dashed border-accent/12" />

            {/* Institution — left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute left-[3%] top-[38%] flex flex-col items-center gap-2 z-10"
            >
              <div
                className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center backdrop-blur-sm"
                style={{ boxShadow: '0 0 30px rgba(163,163,32,0.1)' }}
              >
                <Building2 className="text-accent-light" size={28} />
              </div>
              <span className="text-sm font-bold text-text-primary">Institución</span>
            </motion.div>

            {/* Client — right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute right-[3%] top-[38%] flex flex-col items-center gap-2 z-10"
            >
              <div
                className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center backdrop-blur-sm"
                style={{ boxShadow: '0 0 30px rgba(163,163,32,0.1)' }}
              >
                <Users className="text-accent-light" size={28} />
              </div>
              <span className="text-sm font-bold text-text-primary">Cliente</span>
            </motion.div>

            {/* ── Products positioned in cross/diamond ── */}
            {/* supra — top */}
            <div className="absolute top-[6%] left-1/2 -translate-x-1/2">
              <ProductCard product={products[0]} delay={0.1} />
            </div>
            {/* hydra — left */}
            <div className="absolute top-[38%] left-[17%] -translate-y-1/2">
              <ProductCard product={products[1]} delay={0.2} />
            </div>
            {/* atlas — center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ProductCard product={products[2]} delay={0.3} />
            </div>
            {/* marIA — right */}
            <div className="absolute top-[38%] right-[17%] -translate-y-1/2">
              <ProductCard product={products[3]} delay={0.4} />
            </div>
            {/* ágora — bottom */}
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2">
              <ProductCard product={products[4]} delay={0.5} />
            </div>

            {/* Category labels */}
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="absolute text-[9px] lg:text-[10px] font-semibold text-accent-light/35 tracking-widest uppercase pointer-events-none select-none"
                style={cat.style}
              >
                {cat.label}
              </motion.div>
            ))}

            {/* HSC badge — bottom center */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0e08]/80 border border-accent/20 backdrop-blur-sm">
                <span className="text-[9px] font-black text-accent-light">human software corporation</span>
                <span className="text-[9px] italic text-accent-light/50">ai solutions</span>
              </div>
            </div>
          </div>

          {/* ═══ MOBILE LAYOUT ═══ */}
          <div className="md:hidden h-full flex flex-col p-3 gap-2">
            {/* Header: Institución ↔ Cliente */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center">
                  <Building2 className="text-accent-light" size={16} />
                </div>
                <span className="text-xs font-bold text-text-primary">Institución</span>
              </div>
              <div className="flex-1 mx-3 border-t border-dashed border-accent/20" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-text-primary">Cliente</span>
                <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center">
                  <Users className="text-accent-light" size={16} />
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 gap-2 flex-1 content-center">
              {products.map((product, i) => (
                <motion.a
                  href={product.href}
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                  className={`rounded-xl p-3 text-center text-white flex flex-col justify-center ${i === products.length - 1 ? 'col-span-2 max-w-[50%] mx-auto' : ''}`}
                  style={{
                    backgroundColor: product.color,
                    boxShadow: `0 4px 15px ${product.color}33`,
                  }}
                >
                  <div className="text-sm font-black">{product.name}</div>
                  <div className="text-[8px] opacity-80 mt-0.5 line-clamp-2">{product.desc}</div>
                </motion.a>
              ))}
            </div>

            {/* ARGUS badge — mobile */}
            <div
              className="flex items-center justify-between px-3 py-2 rounded-xl"
              style={{
                backgroundColor: `${ARGUS_COLOR}20`,
                border: `1px dashed ${ARGUS_COLOR}60`,
              }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: ARGUS_ACCENT }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[10px] font-black" style={{ color: ARGUS_ACCENT }}>argus.</span>
              </div>
              <span className="text-[9px] text-text-muted font-medium">capa de observabilidad</span>
            </div>

            {/* HSC badge */}
            <div className="text-center pb-1">
              <span className="text-[9px] font-black text-accent-light/60">human software corporation</span>
            </div>
          </div>
        </div>
      </ContainerScroll>

      {/* Features below scroll */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24 -mt-20 md:-mt-40">
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
