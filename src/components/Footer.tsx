import { Link, useLocation } from 'react-router-dom'

type FooterLink =
  | { name: string; hash: string }
  | { name: string; href: string; isRoute: true }
  | { name: string; href: string; isRoute: false; external?: boolean }

type FooterCategory = {
  label: string
  links: FooterLink[]
}

const footerLinksByLocale: Record<'es' | 'en', Record<string, FooterCategory>> = {
  es: {
    Productos: {
      label: 'Productos',
      links: [
        { name: 'Supra', hash: '#supra' },
        { name: 'Hydra', hash: '#hydra' },
        { name: 'MarIA', hash: '#maria' },
        { name: 'Ágora', hash: '#agora' },
      ],
    },
    Soluciones: {
      label: 'Soluciones',
      links: [
        { name: 'Pagos', hash: '#supra' },
        { name: 'Infraestructura', hash: '#hydra' },
        { name: 'Atención Ciudadana', hash: '#maria' },
        { name: 'Gestión', hash: '#agora' },
      ],
    },
    Legal: {
      label: 'Legal',
      links: [
        { name: 'Política de Privacidad', href: '/es/privacidad', isRoute: true },
        { name: 'Términos del Servicio', href: '/es/terminos', isRoute: true },
        { name: 'Eliminación de Datos', href: '/es/eliminacion-de-datos', isRoute: true },
      ],
    },
    Contacto: {
      label: 'Contacto',
      links: [
        {
          name: 'WhatsApp',
          href: 'https://wa.me/5215510635993?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20Human%20Software',
          isRoute: false,
          external: true,
        },
      ],
    },
  },
  en: {
    Productos: {
      label: 'Products',
      links: [
        { name: 'Supra', hash: '#supra' },
        { name: 'Hydra', hash: '#hydra' },
        { name: 'MarIA', hash: '#maria' },
        { name: 'Ágora', hash: '#agora' },
      ],
    },
    Soluciones: {
      label: 'Solutions',
      links: [
        { name: 'Payments', hash: '#supra' },
        { name: 'Infrastructure', hash: '#hydra' },
        { name: 'Citizen Services', hash: '#maria' },
        { name: 'Management', hash: '#agora' },
      ],
    },
    Legal: {
      label: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/en/privacy', isRoute: true },
        { name: 'Terms of Service', href: '/en/terms', isRoute: true },
        { name: 'Data Deletion', href: '/en/data-deletion', isRoute: true },
      ],
    },
    Contacto: {
      label: 'Contact',
      links: [
        {
          name: 'WhatsApp',
          href: 'https://wa.me/5215510635993?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20Human%20Software',
          isRoute: false,
          external: true,
        },
      ],
    },
  },
}

function resolveLocale(pathname: string): 'es' | 'en' {
  return pathname.startsWith('/en') ? 'en' : 'es'
}

function resolveHash(pathname: string, hash: string): string {
  return pathname === '/' ? hash : `/${hash}`
}

export default function Footer() {
  const { pathname } = useLocation()
  const locale = resolveLocale(pathname)
  const footerLinks = footerLinksByLocale[locale]
  const tagline =
    locale === 'es'
      ? 'El sistema operativo para instituciones del futuro.'
      : 'The operating system for institutions of the future.'

  return (
    <footer id="contacto" className="border-t border-border-default bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg font-black text-white">
              Human Software Corp
            </span>
            <p className="mt-3 text-sm text-text-secondary">{tagline}</p>
          </div>
          {Object.entries(footerLinks).map(([categoryKey, category]) => (
            <div key={categoryKey}>
              <h4 className="text-sm font-semibold text-text-primary mb-3">{category.label}</h4>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    {'hash' in link ? (
                      <a
                        href={resolveHash(pathname, link.hash)}
                        className="text-sm text-text-secondary hover:text-accent-light transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-sm text-text-secondary hover:text-accent-light transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-text-secondary hover:text-accent-light transition-colors"
                        {...(link.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-border-default flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            &copy; 2026 Human Software Corporation. {tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
