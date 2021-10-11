import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Manage your project ideas!',
  bodyText: 'Create and vote proyect ideas with PCM tokens',
  reverse: false,
  primaryButton: {
    to: '/ideas',
    text: 'Vote Ideas',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'PCM', alt: 'PCM token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Influencers project',
  bodyText: 'If you are a big influencer and you want to create your own project you will have a private project!',
  reverse: true,
  primaryButton: {
    to: '/ideas',
    text: 'Start Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'yt', alt: 'Yt logo' },
      { src: 'ig', alt: 'Ig logo' },
      { src: 'tw', alt: 'Tw logo' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'Proyect Coin Manager',
  bodyText:
    'Purchase now your PCM tokens to manage projects and stake it to obtain rewards!',
  reverse: false,
  primaryButton: {
    to: '/farms',
    text: 'Stake PCM',
    external: false,
  },
  secondaryButton: {
    to: 'https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    text: 'Buy',
    external: true,
  },
 
  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'chart', alt: 'Chart' },
      
    ],
  },
}
