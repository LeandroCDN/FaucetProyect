import React from 'react';
import useTheme from 'hooks/useTheme'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { PageMeta } from 'components/Layout/Page'
// import App from './components/App';
import Header from './components/Header';
import FaucetForm from './components/FaucetForm';
import reportWebVitals from './reportWebVitals';

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const Faucet: React.FC = () => {
    reportWebVitals();
    const { theme } = useTheme()

    const FaucetSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }
  
    return (
        <>
        <PageMeta />
          <StyledHeroSection
            innerProps={{ style: { margin: '0', width: '100%' } }}
            background={
            theme.isDark
            ? 'radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)'
            : 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)'
            } 
            index={2}
            hasCurvedDivider={false}
        >
          <Header />
        
          </StyledHeroSection>

        <StyledHeroSection
        innerProps={{ style: FaucetSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
        >
          <FaucetForm />
        </StyledHeroSection>
          
        </>
    );
}



export default Faucet