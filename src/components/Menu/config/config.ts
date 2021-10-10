import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl, pancakeBunniesAddress, pancakeSquadAddress } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: 'https://pancakeswap.finance/swap',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Liquidity'),
        href: 'https://pancakeswap.finance/liquidity',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Projects'),
    href: '/prediction',
    icon: 'Trophy',
    items: [
      {
        label: t('Ideas'),
        href: '/prediction',
      },
      {
        label: t('Developing'),
        href: '/lottery',
        status: {
          text: t('Live'),
          color: 'failure',
        },
      },
      {
        label: t('Developed'),
        href: '/lottery',
      },
    ],
  },
  {
    label: t('Courses'),
    href: `${nftsBaseUrl}`,
    icon: 'Nft',
    items: [
      {
        label: t('Purchase'),
        href: `${nftsBaseUrl}`,
      },
      {
        label: t('Upload'),
        href: `${nftsBaseUrl}/collections/${pancakeBunniesAddress}`,
      },
    ],
  },
  {
    label: 'Info',
    href: '/info',
    icon: 'More',
    items: [
      {
        label: t('Contact us'),
        href: '/ifo',
      },
      {
        label: t('Community'),
        href: '/ifo',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Blog'),
        href: '/voting',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('GitHub'),
        href: 'https://pancakeswap.medium.com',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://docs.pancakeswap.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
