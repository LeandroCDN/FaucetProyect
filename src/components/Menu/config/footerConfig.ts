import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: t('Blog'),
        href: 'https://pancakeswap.medium.com/',
      },
      {
        label: t('Community'),
        href: 'https://docs.pancakeswap.finance/contact-us/telegram',
      },
      {
        label: t('PCM token'),
        href: 'https://docs.pancakeswap.finance/tokenomics/cake',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.pancakeswap.finance',
      },
    ],
  },
]
