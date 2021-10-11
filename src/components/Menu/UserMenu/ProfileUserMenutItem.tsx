import React from 'react'
import styled from 'styled-components'
import { Flex, Skeleton, UserMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import history from 'routerHistory'

interface ProfileUserMenuItemProps {
  isLoading: boolean
}

const Dot = styled.div`
  background-color: ${({ theme }) => theme.colors.failure};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`

const ProfileUserMenuItem: React.FC<ProfileUserMenuItemProps> = ({ isLoading }) => {
  const { t } = useTranslation()

  const handleClick = () => {
    history.push(`/home`)
  }



  if (isLoading) {
    return (
      <UserMenuItem>
        <Skeleton height="24px" width="35%" />
      </UserMenuItem>
    )
  }


  return (
    <UserMenuItem as="button" onClick={handleClick}>
      {t('Your Courses')}
    </UserMenuItem>
  )
}

export default ProfileUserMenuItem
