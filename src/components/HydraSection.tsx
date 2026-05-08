import { motion } from 'framer-motion'
import { CheckCircle, Gauge, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  'Gestión completa de padrón de usuarios y contratos.',
  'Control de cuotas fijas y órdenes de mantenimiento preventivo.',
  'Módulo de Acceso Ciudadano multifacético.',
]

export default function HydraSection() {
  return (
    <section id="hydra" className="py-24 bg-bg-secondary relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden bg-bg-card border border-border-default glow-border p-6">
              <div className="bg-bg-primary rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-text-muted ml-2 font-mono">HYDRA - Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-lg bg-bg-card border border-border-default">
                      <Gauge className="text-[#4f46e5] mb-2" size={20} />
                      <div className="text-xs text-text-muted">Monitorización</div>
                      <div className="text-sm text-text-secondary mt-1">Lecturas en tiempo real</div>
                    </div>
                    <div className="p-4 rounded-lg bg-bg-card border border-border-default text-center">
                      <div className="text-3xl font-bold text-[#4f46e5]">99.9%</div>
                      <div className="text-xs text-text-muted mt-1">Uptime</div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-bg-card border border-border-default">
                    <div className="flex items-center gap-3 mb-3">
                      <Settings className="text-[#4f46e5]" size={20} />
                      <span className="text-sm font-medium">Infraestructura Activa</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-8 rounded bg-[#4f46e5]/20 border border-[#4f46e5]/10" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-2">
              <span className="text-text-primary">HYDRA</span><span className="text-[#4f46e5]">.</span>
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Sistema de Gestión Operativa de Infraestructura
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Plataforma que administra la operación de servicios públicos, incluyendo contratos, lecturas de consumo, órdenes de trabajo y facturación, conectándose con infraestructura física como medidores y sensores.
            </p>
            <div className="space-y-3 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#4f46e5] mt-0.5 shrink-0" size={18} />
                  <p className="text-text-secondary text-sm">{feature}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Button className="rounded-full bg-[#4f46e5] hover:bg-[#4338ca]">Request Demo</Button>
              <Button variant="outline" className="rounded-full">Technical Specs</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
