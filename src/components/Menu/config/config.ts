import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
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
      {
        label: t('Faucet'),
        href: '/faucet',
      },
    ],
  },
  {
    label: t('Products'),
    href: '/farms',
    icon: 'Trophy',
    items: [
      {
        label: t('Projects'),
        href: '/farms',
      },
      {
        label: t('Courses'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Info'),
    href: '/farms',
    icon: 'Trophy',
    items: [
      {
        label: t('Chart'),
        href: 'https://pancakeswap.medium.com',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Blog'),
        href: 'https://medium.com',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://docs.com',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
