import { cn } from '@/lib/utils'
import type { PrivacySection } from '@/content/privacy/types'

interface TableOfContentsProps {
  sections: PrivacySection[]
  label: string
  className?: string
}

export default function TableOfContents({ sections, label, className }: TableOfContentsProps) {
  const linkClassName =
    'block text-sm text-text-secondary hover:text-accent-light transition-colors py-1.5 border-l-2 border-transparent hover:border-accent pl-3 -ml-px'

  const navList = (
    <ol className="space-y-1">
      {sections.map((section) => (
        <li key={section.id}>
          <a href={`#${section.id}`} className={linkClassName}>
            {section.title}
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <nav aria-label={label} className={cn(className)}>
      {/* Mobile: collapsible details */}
      <details className="lg:hidden rounded-lg border border-border-default bg-bg-card/60">
        <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-text-primary select-none list-none flex items-center justify-between [&::-webkit-details-marker]:hidden">
          {label}
          <span aria-hidden="true" className="text-text-muted text-xs">
            ▼
          </span>
        </summary>
        <div className="px-4 pb-4 border-t border-border-default pt-3">{navList}</div>
      </details>

      {/* Desktop: sticky sidebar */}
      <div className="hidden lg:block sticky top-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
          {label}
        </p>
        {navList}
      </div>
    </nav>
  )
}
