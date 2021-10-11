import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Stake PCM',
  bodyText: 'Obtain big rewards staking your PCM tokens on farms and pools',
  reverse: false,
  primaryButton: {
    to: '/farms',
    text: 'Stake Now',
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
    to: '/farms',
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
  headingText: 'PCM makes our world go round.',
  bodyText:
    'Purchase now your PCM tokens to manage projects on the app',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    text: 'Buy PCM',
    external: false,
  },
  secondaryButton: {
    to: 'https://poocoin.app',
    text: 'Chart',
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'chart', alt: 'Chart' },
      
    ],
  },
}
