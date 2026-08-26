import type { PrivacyPolicyContent } from '@/content/privacy/types'

const dataDeletionEs: PrivacyPolicyContent = {
  locale: 'es',
  documentTitle: 'Eliminación de Datos | Human Software Corporation',
  title: 'Eliminación de Datos',
  metaDescription:
    'Instrucciones para solicitar la eliminación de tus datos personales de las plataformas de Human Software Corporation, incluidos los datos provenientes de las plataformas de Meta.',
  lastUpdatedLabel: 'Última actualización',
  lastUpdated: '26 de agosto de 2026',
  backLinkLabel: 'Volver al inicio',
  tocLabel: 'Contenido',
  langSwitcher: {
    es: 'Español',
    en: 'English',
    current: 'Idioma actual: Español',
  },
  intro: '',
  sections: [
    {
      id: 'que-datos',
      title: '¿Qué datos puedes eliminar?',
      blocks: [
        {
          type: 'paragraph',
          text: 'Si interactuaste por WhatsApp u otros canales de mensajería con una empresa u organismo que utiliza nuestras plataformas (como Ágora), podemos eliminar los datos personales asociados: tu información de contacto, el contenido de las conversaciones y los casos de atención (tickets) vinculados a ti.',
        },
      ],
    },
    {
      id: 'como-solicitar',
      title: 'Cómo solicitar la eliminación',
      blocks: [
        {
          type: 'paragraph',
          text: '**1. Escríbenos directamente.** Envía un correo a tech@humansoftware.mx con el asunto «Solicitud de eliminación de datos», indicando: (a) tu nombre, (b) el número de teléfono o cuenta desde la que conversaste, y (c) la empresa u organismo con el que interactuaste.',
        },
        {
          type: 'paragraph',
          text: '**2. A través de la empresa que te atendió.** También puedes presentar tu solicitud directamente con la empresa u organismo con quien conversaste; nosotros ejecutaremos la eliminación en la plataforma a su instrucción.',
        },
      ],
    },
    {
      id: 'que-sucede-despues',
      title: 'Qué sucede después',
      blocks: [
        {
          type: 'list',
          items: [
            'Confirmaremos la recepción de tu solicitud por el mismo medio.',
            'Verificaremos tu identidad para proteger tus datos de solicitudes indebidas.',
            'Eliminaremos la información en un plazo máximo de 20 días hábiles, salvo aquella que debamos conservar por obligación legal, en cuyo caso te lo informaremos.',
            'Te notificaremos cuando la eliminación se haya completado.',
          ],
        },
      ],
    },
    {
      id: 'datos-de-meta',
      title: 'Datos provenientes de plataformas de Meta',
      blocks: [
        {
          type: 'paragraph',
          text: 'Esta página también aplica a los datos que recibimos a través de las plataformas de Meta (como WhatsApp) cuando conversas con nuestros clientes. La eliminación en nuestras plataformas no afecta las copias que permanezcan en tu propio dispositivo o en tu cuenta de dichas plataformas, las cuales se rigen por las políticas de Meta.',
        },
      ],
    },
    {
      id: 'mas-informacion',
      title: 'Más información',
      blocks: [
        {
          type: 'paragraph',
          text: 'Consulta nuestra [Política de Privacidad](/es/privacidad) para conocer cómo tratamos tus datos y tus derechos ARCO conforme a la ley mexicana.',
        },
      ],
    },
  ],
}

export default dataDeletionEs
