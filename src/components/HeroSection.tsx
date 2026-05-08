import { motion } from 'framer-motion'
import { ArrowRight, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent-secondary/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs font-medium mb-6">
              AI SOLUTIONS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              el sistema operativo para instituciones en la era de la{' '}
              <span className="gradient-text">inteligencia artificial.</span>
            </h1>

            <p className="text-lg text-text-secondary mb-8 max-w-xl">
              Convertimos la complejidad institucional en eficiencia operativa real a través de módulos fundacionales propietarios.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/productos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-glow transition-colors"
              >
                Explorar Soluciones <ArrowRight size={18} />
              </Link>
              <Link
                to="/company"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-light text-text-primary font-medium hover:border-accent/50 transition-colors"
              >
                <FileText size={18} /> Ver Whitepaper
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 via-accent-secondary/10 to-transparent animate-pulse" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent/10 to-transparent border border-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-mono text-accent-light mb-2">LATENCY: 0.003s</div>
                  <div className="text-3xl font-bold text-text-primary">AGENT READY</div>
                  <div className="text-sm text-text-secondary mt-1">v1.0.0</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
