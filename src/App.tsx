import { Center, Heading } from '@chakra-ui/react'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Swibc from './components/sidebar'
import KuttyHero from './pages/index';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/index">
            <Swibc />
          </Route>
          <Route path="/">
            <KuttyHero />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
