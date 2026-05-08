import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WA_LINK = 'https://wa.me/5215510635993?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20Human%20Software'

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center">
            <MessageCircle className="text-accent-light" size={32} />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para transformar tu{' '}
            <span className="gradient-text">institución?</span>
          </h2>

          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            Agenda una llamada con nuestro equipo y descubre cómo Human Software puede digitalizar y automatizar las operaciones de tu organización.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-3 rounded-full px-8 text-base">
                <MessageCircle size={20} />
                Hablar por WhatsApp
              </Button>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-3 rounded-full px-8 text-base">
                Agendar Demo <ArrowRight size={20} />
              </Button>
            </a>
          </div>

          <p className="text-sm text-text-muted mt-6">
            +52 55 1063 5993
          </p>
        </motion.div>
      </div>
    </section>
  )
}
