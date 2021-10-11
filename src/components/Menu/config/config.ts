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
      {
        label: 'Faucet',
        href: '/faucet',
      },
    ],
  },
  {
    label: 'Projects',
    href: '/ideas',
    icon: 'Trophy',
    items: [
      {
        label: 'Ideas',
        href: '/ideas',
      },
      {
        label: 'Developing',
        href: '/developing',
        status: {
          text: 'Live',
          color: 'failure',
        },
      },
      {
        label: 'Developed',
        href: '/developed',
      },
    ],
  },
  {
    label: 'Courses',
    href: `/purchase}`,
    icon: 'Nft',
    items: [
      {
        label: 'Purchase',
        href: `/purchase`,
      },
      {
        label: 'Upload',
        href: `/upload`,
      },
    ],
  },
  {
    label: 'Info',
    href: '/contact',
    icon: 'More',
    items: [
      {
        label: 'Contact us',
        href: '/contact',
      },
      {
        label: 'Community',
        href: '/contact',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: 'Blog',
        href: '/contact',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: 'GitHub',
        href: '/contact',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: 'Docs',
        href: '/contact',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
