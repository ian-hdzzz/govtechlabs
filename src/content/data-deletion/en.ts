import type { PrivacyPolicyContent } from '@/content/privacy/types'

const dataDeletionEn: PrivacyPolicyContent = {
  locale: 'en',
  documentTitle: 'Data Deletion | Human Software Corporation',
  title: 'Data Deletion',
  metaDescription:
    'Instructions to request the deletion of your personal data from the Human Software Corporation platforms, including data received through Meta platforms.',
  lastUpdatedLabel: 'Last updated',
  lastUpdated: 'August 26, 2026',
  backLinkLabel: 'Back to home',
  tocLabel: 'Contents',
  langSwitcher: {
    es: 'Español',
    en: 'English',
    current: 'Current language: English',
  },
  intro: '',
  sections: [
    {
      id: 'what-data',
      title: 'What data can you delete?',
      blocks: [
        {
          type: 'paragraph',
          text: 'If you interacted through WhatsApp or other messaging channels with a company or organization that uses our platforms (such as Ágora), we can delete the associated personal data: your contact information, the content of your conversations, and the support cases (tickets) linked to you.',
        },
      ],
    },
    {
      id: 'how-to-request',
      title: 'How to request deletion',
      blocks: [
        {
          type: 'paragraph',
          text: '**1. Write to us directly.** Send an email to tech@humansoftware.mx with the subject «Data deletion request», indicating: (a) your name, (b) the phone number or account from which you chatted, and (c) the company or organization you interacted with.',
        },
        {
          type: 'paragraph',
          text: '**2. Through the company that assisted you.** You can also submit your request directly to the company or organization you chatted with; we will carry out the deletion on the platform at their instruction.',
        },
      ],
    },
    {
      id: 'what-happens-next',
      title: 'What happens next',
      blocks: [
        {
          type: 'list',
          items: [
            'We will confirm receipt of your request through the same channel.',
            'We will verify your identity to protect your data from improper requests.',
            'We will delete the information within a maximum of 20 business days, except for data we must retain due to legal obligations, in which case we will inform you.',
            'We will notify you when the deletion has been completed.',
          ],
        },
      ],
    },
    {
      id: 'data-from-meta',
      title: 'Data from Meta platforms',
      blocks: [
        {
          type: 'paragraph',
          text: 'This page also applies to the data we receive through Meta platforms (such as WhatsApp) when you chat with our customers. Deletion on our platforms does not affect any copies that remain on your own device or in your account on those platforms, which are governed by Meta’s policies.',
        },
      ],
    },
    {
      id: 'more-information',
      title: 'More information',
      blocks: [
        {
          type: 'paragraph',
          text: 'See our [Privacy Policy](/en/privacy) to learn how we process your data and your ARCO rights under Mexican law.',
        },
      ],
    },
  ],
}

export default dataDeletionEn
