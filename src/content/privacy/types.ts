export type PrivacyLocale = 'es' | 'en'

export type PrivacyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

export interface PrivacySection {
  id: string
  title: string
  blocks: PrivacyBlock[]
}

export interface PrivacyPolicyContent {
  locale: PrivacyLocale
  documentTitle: string
  title: string
  metaDescription: string
  lastUpdatedLabel: string
  lastUpdated: string
  backLinkLabel: string
  tocLabel: string
  langSwitcher: {
    es: string
    en: string
    current: string
  }
  intro: string
  sections: PrivacySection[]
}
