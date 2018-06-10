// import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import configureStore from './store/configureStore'
import { runLogic } from './logic'

import Routes from './routes'

const store = configureStore()
runLogic(store)

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)