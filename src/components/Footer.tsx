const HSC_COLOR = '#8B8B00'

const footerLinks = {
  Products: [
    { name: 'Supra', href: '#supra' },
    { name: 'Hydra', href: '#hydra' },
    { name: 'MarIA', href: '#maria' },
    { name: 'Ágora', href: '#agora' },
  ],
  Solutions: [
    { name: 'Pagos', href: '#supra' },
    { name: 'Infraestructura', href: '#hydra' },
    { name: 'Atención Ciudadana', href: '#maria' },
    { name: 'Gestión', href: '#agora' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  Contact: [
    { name: 'Contact Us', href: '#contacto' },
  ],
}

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-border-default bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg font-black" style={{ color: HSC_COLOR }}>
              Human Software Corp
            </span>
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
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-accent-light transition-colors"
                    >
                      {link.name}
                    </a>
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
