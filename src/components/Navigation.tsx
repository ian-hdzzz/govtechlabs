import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Supra', hash: '#supra' },
  { name: 'Hydra', hash: '#hydra' },
  { name: 'MarIA', hash: '#maria' },
  { name: 'Ágora', hash: '#agora' },
  { name: 'Argus', hash: '#argus' },
  { name: 'Nosotros', hash: '#impacto' },
]

function resolveHref(pathname: string, hash: string): string {
  return pathname === '/' ? hash : `/${hash}`
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav aria-label="Navegación principal" className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-black text-white">
              Human Software Corporation
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={resolveHref(pathname, link.hash)}
                className="text-sm font-medium transition-colors hover:text-accent-light text-text-secondary"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/5215510635993?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20Human%20Software"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Comenzar — contactar por WhatsApp (abre en nueva pestaña)"
              className="px-5 py-2 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent-glow transition-colors"
            >
              Comenzar
            </a>
          </div>

          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="md:hidden glass border-t border-border-default">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={resolveHref(pathname, link.hash)}
                className="block text-sm font-medium text-text-secondary hover:text-accent-light transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5215510635993?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20Human%20Software"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Comenzar — contactar por WhatsApp (abre en nueva pestaña)"
              className="block w-full text-center px-5 py-2 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent-glow transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Comenzar
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
