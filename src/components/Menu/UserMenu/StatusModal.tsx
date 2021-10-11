import React, { useState } from 'react'
import {
  ButtonMenu,
  ButtonMenuItem,
  CloseIcon,
  Heading,
  IconButton,
  InjectedModalProps,
  ModalBody,
  ModalContainer,
  ModalHeader as UIKitModalHeader,
  ModalTitle,
} from '@pancakeswap/uikit'
import { parseUnits } from 'ethers/lib/utils'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import StatusProjects from './StatusProjects'
import StatusCourses from './StatusCourses'

export enum WalletViews {
  PROJECTS,
  COURSES,
}

interface WalletModalProps extends InjectedModalProps {
  initialView?: WalletViews
}

const ModalHeader = styled(UIKitModalHeader)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
`

const Tabs = styled.div`
  background-color: ${({ theme }) => theme.colors.dropdown};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 16px 24px;
`

const StatusModal: React.FC<WalletModalProps> = ({ initialView = WalletViews.PROJECTS, onDismiss }) => {
  const [view, setView] = useState(initialView)
  const { t } = useTranslation()

  const handleClick = (newIndex: number) => {
    setView(newIndex)
  }

  return (
    <ModalContainer title={t('IdeaManager')} minWidth="320px">
      <ModalHeader>
        <ModalTitle>
          <Heading>{t('Your Status')}</Heading>
        </ModalTitle>
        <IconButton variant="text" onClick={onDismiss}>
          <CloseIcon width="24px" color="text" />
        </IconButton>
      </ModalHeader>
      <Tabs>
        <ButtonMenu scale="sm" variant="subtle" onItemClick={handleClick} activeIndex={view} fullWidth>
          <ButtonMenuItem>{t('Projects')}</ButtonMenuItem>
          <ButtonMenuItem>{t('Courses')}</ButtonMenuItem>
        </ButtonMenu>
      </Tabs>
      <ModalBody p="24px" maxWidth="400px" width="100%">
        {view === WalletViews.PROJECTS && <StatusCourses />}
        {view === WalletViews.COURSES && <StatusCourses />}
      </ModalBody>
    </ModalContainer>
  )
}

export default StatusModal
