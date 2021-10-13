import React, { lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import useUserAgent from 'hooks/useUserAgent'
import useScrollOnRouteChange from 'hooks/useScrollOnRouteChange'
import { usePollBlockNumber } from 'state/block/hooks'
import { usePollCoreFarmData } from 'state/farms/hooks' 
import { DatePickerPortal } from 'components/DatePicker'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import { ToastListener } from './contexts/ToastsContext'
import PageLoader from './components/Loader/PageLoader'
import EasterEgg from './components/EasterEgg'
import GlobalCheckClaimStatus from './components/GlobalCheckClaimStatus'
import history from './routerHistory'
 
// Route-based code splitting
const Home = lazy(() => import('./views/Home')) 

// Earn
const Farms = lazy(() => import('./views/Farms'))
const Pools = lazy(() => import('./views/Pools'))
// const Faucet = lazy(() => import('./views/Faucet'))   

const Faucet2 = lazy(() => import('./views/Faucet2/Landing'));

// Projects
const Ideas = lazy(() => import('./views/Ideas'))
const Developing = lazy(() => import('./views/Developing')) 
const Developed = lazy(() => import('./views/Developed'))

// Courses
const Purchase = lazy(() => import('./views/Purchase'))
const Upload = lazy(() => import('./views/Upload'))

// Info
const Contact = lazy(() => import('./views/Contact'))

// 404
const NotFound = lazy(() => import('./views/NotFound'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})
       
const App: React.FC = () => {
  const { account } = useWeb3React()

  usePollBlockNumber()
  useEagerConnect()  
  usePollCoreFarmData()
  useScrollOnRouteChange()
  useUserAgent()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <GlobalCheckClaimStatus excludeLocations={[]} />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/pools">
              <Pools />
            </Route> 
            <Route path="/faucet">
              <Faucet2 />
            </Route>
            <Route path="/ideas">
              <Ideas />
            </Route>
            <Route path="/developing">
              <Developing />
            </Route>
            <Route path="/developed">
              <Developed />
            </Route>
            <Route path="/purchase">
              <Purchase />
            </Route>
            <Route path="/upload">
              <Upload />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
      
            {/* Redirect */}
            <Route path="/farming">
              <Redirect to="/farms" /> 
            </Route>
            <Route path="/farm">
              <Redirect to="/farms" />
            </Route>
            <Route path="/staking">
              <Redirect to="/pools" />
            </Route>
            <Route path="/stake">
              <Redirect to="/pools" />
            </Route>
            <Route path="/syrup">
              <Redirect to="/pools" />
            </Route>

            <Route path="/project">
              <Redirect to="/ideas" />
            </Route>
            <Route path="/projects">
              <Redirect to="/ideas" />
            </Route>

            <Route path="/courses">
              <Redirect to="/purchase" /> 
            </Route>
            <Route path="/course">
              <Redirect to="/purchase" />
            </Route>
            <Route path="/uploads">
              <Redirect to="/upload" />
            </Route>

            <Route path="/project">
              <Redirect to="/ideas" />
            </Route>
            <Route path="/projects">
              <Redirect to="/ideas" />
            </Route>

            <Route path="/info">
              <Redirect to="/contact" />
            </Route>
            <Route path="/infos">
              <Redirect to="/contact" />
            </Route>

            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
      <EasterEgg iterations={2} />
      <ToastListener />
      <DatePickerPortal />
    </Router>
  )
}

export default React.memo(App)
