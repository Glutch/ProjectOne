import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './components/App'
import Menu from './components/Menu'
import Home from './components/Home'

export default () =>
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={Menu} />
      </Switch>
    </App>
  </BrowserRouter>
