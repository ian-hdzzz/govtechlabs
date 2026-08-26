import { useEffect } from 'react'
import LegalPageLayout from '@/components/LegalPageLayout'
import termsOfServiceEs from '@/content/terms/es'
import termsOfServiceEn from '@/content/terms/en'
import type { PrivacyLocale } from '@/content/privacy/types'

const contentByLocale = {
  es: termsOfServiceEs,
  en: termsOfServiceEn,
} as const

interface TermsOfServicePageProps {
  locale: PrivacyLocale
}

export default function TermsOfServicePage({ locale }: TermsOfServicePageProps) {
  const content = contentByLocale[locale]

  useEffect(() => {
    document.title = content.documentTitle
    document.documentElement.lang = locale

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', content.metaDescription)
    }

    return () => {
      document.title = 'Human Software Corp - La Plataforma para Instituciones Inteligentes'
      document.documentElement.lang = 'es'
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          'Human Software Corporation — El sistema operativo para instituciones inteligentes. Automatización, pagos, infraestructura y atención ciudadana.',
        )
      }
    }
  }, [content, locale])

  return (
    <LegalPageLayout
      content={content}
      esPath="/es/terminos"
      enPath="/en/terms"
      lastUpdatedDateTime="2026-08-26"
    />
  )
}
