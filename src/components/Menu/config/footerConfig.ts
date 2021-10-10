import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'


export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact us'),
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: t('Blog'),
        href: 'https://pancakeswap.medium.com/',
      },
      {
        label: t('Discord'),
        href: 'https://docs.pancakeswap.finance/contact-us/telegram',
      },

    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Guides'),
        href: 'https://docs.pancakeswap.finance/contact-us/customer-support',
      },
      {
        label: t('Report Bug'),
        href: 'https://docs.pancakeswap.finance/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: t('Audits'),
        href: 'https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      },
    ],
  },
]
