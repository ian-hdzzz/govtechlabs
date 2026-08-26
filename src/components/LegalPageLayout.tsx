import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TableOfContents from '@/components/TableOfContents'
import ParticlesBackground from '@/components/ParticlesBackground'
import type { PrivacyPolicyContent } from '@/content/privacy/types'
import { cn } from '@/lib/utils'

interface LegalPageLayoutProps {
  content: PrivacyPolicyContent
  esPath?: string
  enPath?: string
  lastUpdatedDateTime?: string
}

// Renders inline [label](/route) links and **bold** spans inside content text.
function renderInline(text: string): ReactNode {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
  const parts: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    if (match[1] !== undefined) {
      parts.push(
        <Link key={match.index} to={match[2]}>
          {match[1]}
        </Link>,
      )
    } else {
      parts.push(<strong key={match.index}>{match[3]}</strong>)
    }
    lastIndex = pattern.lastIndex
  }
  if (lastIndex === 0) return text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts
}

export default function LegalPageLayout({
  content,
  esPath = '/es/privacidad',
  enPath = '/en/privacy',
  lastUpdatedDateTime = '2026-06-29',
}: LegalPageLayoutProps) {
  const { locale } = content
  const skipLabel = locale === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'

  return (
    <div className="min-h-screen bg-bg-primary relative">
      <a href="#contenido-legal" className="skip-link">
        {skipLabel}
      </a>
      <ParticlesBackground />
      <Navigation />
      <main id="contenido-legal" tabIndex={-1} className="pt-16">
        {/* Hero */}
        <header className="border-b border-border-default bg-bg-secondary/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-light transition-colors mb-6"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              {content.backLinkLabel}
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-white">{content.title}</h1>
                <p className="mt-3 text-sm text-text-muted">
                  {content.lastUpdatedLabel}:{' '}
                  <time dateTime={lastUpdatedDateTime}>{content.lastUpdated}</time>
                </p>
              </div>

              <nav aria-label={locale === 'es' ? 'Selector de idioma' : 'Language selector'}>
                <p className="sr-only">{content.langSwitcher.current}</p>
                <div className="inline-flex rounded-full border border-border-default overflow-hidden text-sm">
                  <Link
                    to={esPath}
                    hrefLang="es"
                    aria-current={locale === 'es' ? 'page' : undefined}
                    className={cn(
                      'px-4 py-2 transition-colors',
                      locale === 'es'
                        ? 'bg-accent text-black font-semibold'
                        : 'text-text-secondary hover:text-accent-light hover:bg-bg-card',
                    )}
                  >
                    {content.langSwitcher.es}
                  </Link>
                  <Link
                    to={enPath}
                    hrefLang="en"
                    aria-current={locale === 'en' ? 'page' : undefined}
                    className={cn(
                      'px-4 py-2 transition-colors border-l border-border-default',
                      locale === 'en'
                        ? 'bg-accent text-black font-semibold'
                        : 'text-text-secondary hover:text-accent-light hover:bg-bg-card',
                    )}
                  >
                    {content.langSwitcher.en}
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 xl:gap-16">
            <TableOfContents
              sections={content.sections}
              label={content.tocLabel}
              className="mb-8 lg:mb-0"
            />

            <article className="legal-prose max-w-3xl">
              {content.intro && (
                <p className="text-lg text-text-secondary leading-relaxed">{content.intro}</p>
              )}

              {content.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2>{section.title}</h2>
                  {section.blocks.map((block, index) =>
                    block.type === 'paragraph' ? (
                      <p key={index}>{renderInline(block.text)}</p>
                    ) : (
                      <ul key={index}>
                        {block.items.map((item) => (
                          <li key={item}>{renderInline(item)}</li>
                        ))}
                      </ul>
                    ),
                  )}
                </section>
              ))}
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
