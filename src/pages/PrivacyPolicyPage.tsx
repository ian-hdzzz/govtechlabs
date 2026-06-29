import { useEffect } from 'react'
import LegalPageLayout from '@/components/LegalPageLayout'
import privacyPolicyEs from '@/content/privacy/es'
import privacyPolicyEn from '@/content/privacy/en'
import type { PrivacyLocale } from '@/content/privacy/types'

const contentByLocale = {
  es: privacyPolicyEs,
  en: privacyPolicyEn,
} as const

interface PrivacyPolicyPageProps {
  locale: PrivacyLocale
}

export default function PrivacyPolicyPage({ locale }: PrivacyPolicyPageProps) {
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

  return <LegalPageLayout content={content} />
}
