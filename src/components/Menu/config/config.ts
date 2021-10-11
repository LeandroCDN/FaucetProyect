import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: 'Trade',
    href: '/swap',
    icon: 'Swap',
    showItemsOnMobile: false,
    items: [
      {
        label: 'Exchange',
        href: 'https://pancakeswap.finance/swap',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: 'Liquidity',
        href: 'https://pancakeswap.finance/liquidity',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    label: 'Earn',
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: 'Farms',
        href: '/farms',
      },
      {
        label: 'Pools',
        href: '/pools',
      },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: 'Trophy',
    items: [
      {
        label: 'Ideas',
        href: '/projects',
      },
      {
        label: 'Developing',
        href: '/projects',
        status: {
          text: 'Live',
          color: 'failure',
        },
      },
      {
        label: 'Developed',
        href: '/projects',
      },
    ],
  },
  {
    label: 'Courses',
    href: `/courses}`,
    icon: 'Nft',
    items: [
      {
        label: 'Purchase',
        href: `/courses`,
      },
      {
        label: 'Upload',
        href: `/courses`,
      },
    ],
  },
  {
    label: 'Info',
    href: '/info',
    icon: 'More',
    items: [
      {
        label: 'Contact us',
        href: '/info',
      },
      {
        label: 'Community',
        href: '/info',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: 'Blog',
        href: '/info',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: 'GitHub',
        href: '/info',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: 'Docs',
        href: '/info',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
