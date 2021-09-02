import { Center, Heading, Spinner } from '@chakra-ui/react'
import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Swibc from './components/sidebar'
// import KuttyHero from './pages/index';
const KuttyHero = lazy(() => import('./pages/index'))
const Swibc = lazy(() => import('./components/sidebar'))

function App() {
  
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Center h='full'><Spinner /></Center>}>
        <Switch>
          <Route path="/index">
            <Swibc />
          </Route>
          <Route path="/">
            <KuttyHero />
          </Route>
        </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
