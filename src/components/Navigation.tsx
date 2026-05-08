import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Supra', href: '#supra' },
  { name: 'Hydra', href: '#hydra' },
  { name: 'MarIA', href: '#maria' },
  { name: 'Ágora', href: '#agora' },
  { name: 'Nosotros', href: '#impacto' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2">
            <span className="text-lg font-black text-white">
              Human Software Corp
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-accent-light text-text-secondary"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/5215510635993?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20Human%20Software" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent-glow transition-colors"
            >
              Comenzar
            </a>
          </div>

          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-border-default">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-medium text-text-secondary hover:text-accent-light transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5215510635993?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20Human%20Software" target="_blank" rel="noopener noreferrer"
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
