import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import ceaEdificio from '@/assets/cea/cea-edificio.png'
import ceaTanque from '@/assets/cea/cea-tanque.png'
import ceaInfraestructura from '@/assets/cea/cea-infraestructura.png'

const testimonials = [
  {
    quote: 'Automatizamos la gestión de reportes de fugas y obtuvimos visibilidad completa del proceso de atención. Mejoramos la eficiencia operativa 70% y reducimos la dependencia de personal de soporte en más de 10x.',
    role: 'Director de Innovación',
    org: 'Organismo Administrador de Agua Estatal',
    tag: 'CEA Querétaro',
  },
  {
    quote: 'Transformamos nuestra recaudación digital y eliminamos gran parte del trabajo manual en pagos y conciliación. Hoy los pagos se registran y concilian automáticamente, reduciendo significativamente la carga del call center.',
    role: 'VP Comercial',
    org: 'Empresa de Recaudación para Servicios Financieros',
    tag: 'Servicios Financieros',
  },
]

export default function ImpactSection() {
  return (
    <section id="impacto" className="py-24 bg-bg-secondary relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs font-mono text-accent-light mb-4 tracking-widest">CASOS DE ÉXITO</div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Las instituciones líderes ya{' '}
            <span className="gradient-text">transformaron su operación</span>
          </h2>
        </motion.div>

        {/* CEA Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={ceaInfraestructura} alt="Infraestructura hídrica CEA Querétaro" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={ceaEdificio} alt="Edificio CEA Querétaro" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={ceaTanque} alt="Tanque de agua CEA Querétaro" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-bg-card border border-border-default hover:border-accent/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Quote className="text-accent-light" size={18} />
                </div>
                <span className="text-xs font-mono text-accent-light px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                  {t.tag}
                </span>
              </div>

              <blockquote className="text-text-secondary leading-relaxed mb-6 italic">
                "{t.quote}"
              </blockquote>

              <div>
                <div className="font-semibold text-accent-light">{t.role}</div>
                <div className="text-sm text-text-muted">{t.org}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
