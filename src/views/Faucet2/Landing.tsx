import React from 'react';
import useTheme from 'hooks/useTheme'
import styled from 'styled-components'
import { Image, Heading, RowType, Toggle, Text, Button, ArrowForwardIcon, Flex } from '@pancakeswap/uikit'
import PageSection from 'components/PageSection'
import PageHeader from 'components/PageHeader'
import Page from 'components/Layout/Page'
import App from './components';
import reportWebVitals from './reportWebVitals';


const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`
const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`

const Landing: React.FC = () => {
    reportWebVitals();
    const { theme } = useTheme()

    const FaucetSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }
  
    return (
      <> 
        <PageHeader>
           <Heading as="h1" scale="xxl" color="secondary" mb="24px">
                Faucet
            </Heading>
            <Heading scale="lg" color="text">
                 Claim free PCM tokens every day!
            </Heading>
            
        </PageHeader>
         <Page>
            <App />
            <StyledImage src="/images/decorations/3dpan.png" alt="Pancake illustration" width={120} height={103} />
          </Page>
      </>
    );
}


export default Landing
