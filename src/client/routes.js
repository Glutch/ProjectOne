import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import About from './components/About'

export default () =>
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cats' component={About} />
      </Switch>
    </App>
  </BrowserRouter>
