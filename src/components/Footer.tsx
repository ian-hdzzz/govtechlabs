import { Link } from 'react-router-dom'

const footerLinks = {
  Products: [
    { name: 'Supra', path: '/productos#supra' },
    { name: 'Hydra', path: '/productos#hydra' },
    { name: 'MarIA', path: '/soluciones#maria' },
    { name: 'Ágora', path: '/soluciones#agora' },
  ],
  Solutions: [
    { name: 'Pagos', path: '/productos#supra' },
    { name: 'Infraestructura', path: '/productos#hydra' },
    { name: 'Atención Ciudadana', path: '/soluciones#maria' },
    { name: 'Gestión', path: '/soluciones#agora' },
  ],
  Legal: [
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
  ],
  Contact: [
    { name: 'Contact Us', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg font-bold text-text-primary">Human Software Corp</span>
            <p className="mt-3 text-sm text-text-secondary">
              The operating system for future-ready institutions.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-text-primary mb-3">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-text-secondary hover:text-accent-light transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-border-default flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            &copy; 2026 Human Software Corporation. The operating system for future-ready institutions.
          </p>
        </div>
      </div>
    </footer>
  )
}
