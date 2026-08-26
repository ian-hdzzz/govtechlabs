import { useEffect } from 'react'
import LegalPageLayout from '@/components/LegalPageLayout'
import dataDeletionEs from '@/content/data-deletion/es'
import dataDeletionEn from '@/content/data-deletion/en'
import type { PrivacyLocale } from '@/content/privacy/types'

const contentByLocale = {
  es: dataDeletionEs,
  en: dataDeletionEn,
} as const

interface DataDeletionPageProps {
  locale: PrivacyLocale
}

export default function DataDeletionPage({ locale }: DataDeletionPageProps) {
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
      esPath="/es/eliminacion-de-datos"
      enPath="/en/data-deletion"
      lastUpdatedDateTime="2026-08-26"
    />
  )
}
