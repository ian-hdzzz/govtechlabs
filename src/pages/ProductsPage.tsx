import { motion } from 'framer-motion'
import { CheckCircle, CreditCard, Zap, BarChart3, Settings, Gauge } from 'lucide-react'

const supraFeatures = [
  { icon: CreditCard, title: 'Recaudación', desc: 'Procesamiento de cobros multicanal con conciliación automática.' },
  { icon: Zap, title: 'Integración', desc: 'Conexión directa de SPEI con plataformas gubernamentales y bancarias.' },
]

const hydraFeatures = [
  'Gestión completa de padrón de usuarios y contratos.',
  'Control de cuotas fijas y órdenes de mantenimiento preventivo.',
  'Módulo de Acceso Ciudadano multifacético.',
]

const supraStats = [
  { value: '2.4M+', label: 'Transacciones Procesadas' },
  { value: '150+', label: 'Instituciones Activas' },
  { value: '45k', label: 'SPEI Diarios' },
  { value: 'EAL6+', label: 'Security Rating' },
]

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 relative overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-supra-accent/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="text-xs font-mono text-accent-light mb-4 tracking-widest">INSTITUTIONAL OPERATING SYSTEM</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            Transforming Complex Workflows into{' '}
            <span className="gradient-text">Unified Simplicity</span>
          </h1>
          <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
            A dual-engine platform designed to orchestrate citizen interactions and institutional management with superhuman precision.
          </p>
        </div>
      </section>

      {/* SUPRA */}
      <section id="supra" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-supra/30 border border-supra-accent/30 text-xs font-mono text-supra-accent mb-4">
                Supra
              </div>
              <h2 className="text-5xl font-black mb-2" style={{ color: '#1e3a5f' }}>
                SUPRA<span className="text-supra-accent">.</span>
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Sistema Unificado de Pagos y Recaudación Automatizada
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Infraestructura de pagos institucional que permite generar adeudos y procesar pagos a través de SPEI, tarjetas y tiendas de conveniencia, integrándose con sistemas de facturación y ERPs.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {supraFeatures.map((feature) => (
                  <div key={feature.title} className="p-4 rounded-xl bg-bg-card border border-border-default hover:border-supra-accent/30 transition-all">
                    <feature.icon className="text-supra-accent mb-2" size={24} />
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
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden bg-bg-card border border-border-default glow-border p-6">
                <div className="bg-bg-primary rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-text-muted ml-2 font-mono">SUPRA - Vista Administrativa</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-bg-card border border-border-default">
                      <div>
                        <div className="text-xs text-text-muted">Total Recaudado Hoy</div>
                        <div className="text-2xl font-bold text-supra-accent">$12,450.00</div>
                      </div>
                      <BarChart3 className="text-supra-accent" size={32} />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-lg bg-bg-card border border-border-default text-center">
                        <div className="text-lg font-bold">42</div>
                        <div className="text-xs text-text-muted">Pagos Realizados</div>
                      </div>
                      <div className="p-3 rounded-lg bg-bg-card border border-border-default text-center">
                        <div className="text-lg font-bold">1,204</div>
                        <div className="text-xs text-text-muted">Cuentas por Cobrar</div>
                      </div>
                      <div className="p-3 rounded-lg bg-bg-card border border-border-default text-center">
                        <div className="text-lg font-bold text-green-400">68%</div>
                        <div className="text-xs text-text-muted">Eficiencia de Cobro</div>
                      </div>
                    </div>

                    <div className="h-32 rounded-lg bg-bg-card border border-border-default p-4 flex items-end gap-1">
                      {[40, 65, 55, 80, 70, 90, 60, 75, 85, 95, 70, 80].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-supra-accent/60 to-supra-accent"
                          style={{ height: `${h}%` }}
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

      {/* HYDRA */}
      <section id="hydra" className="py-24 bg-bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
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
                        <Gauge className="text-hydra-accent mb-2" size={20} />
                        <div className="text-xs text-text-muted">Monitorización de Lecturas</div>
                        <div className="text-sm text-text-secondary mt-1">Seguimiento en tiempo real de medidores</div>
                      </div>
                      <div className="p-4 rounded-lg bg-bg-card border border-border-default text-center">
                        <div className="text-3xl font-bold text-hydra-accent">99.9%</div>
                        <div className="text-xs text-text-muted mt-1">Uptime</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-bg-card border border-border-default">
                      <div className="flex items-center gap-3 mb-3">
                        <Settings className="text-hydra-accent" size={20} />
                        <span className="text-sm font-medium">Infraestructura Activa</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="h-8 rounded bg-hydra-accent/20 border border-hydra-accent/10" />
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
              className="order-1 lg:order-2"
            >
              <h2 className="text-5xl font-black mb-2" style={{ color: '#1a1a2e' }}>
                <span className="text-text-primary">HYDRA</span><span className="text-hydra-accent">.</span>
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Sistema de Gestión Operativa de Infraestructura
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Plataforma que administra la operación de servicios públicos, incluyendo contratos, lecturas de consumo, órdenes de trabajo y facturación, conectándose con infraestructura física como medidores y sensores.
              </p>

              <div className="space-y-3 mb-8">
                {hydraFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-hydra-accent mt-0.5 shrink-0" size={18} />
                    <p className="text-text-secondary text-sm">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-full bg-hydra-accent text-white font-medium hover:opacity-90 transition-opacity">
                  Request Demo
                </button>
                <button className="px-6 py-3 rounded-full border border-border-light text-text-primary font-medium hover:border-hydra-accent/50 transition-colors">
                  Technical Specs
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-16 bg-bg-card border-y border-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {supraStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-text-secondary mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
