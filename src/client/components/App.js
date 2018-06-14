import React, { Component } from 'react'
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { Link, withRouter } from 'react-router-dom'

import Menu from './Menu'

@injectSheet({
  box: {
    fontFamily: 'sans-serif'
  }
})

export default class App extends Component {
  render() {
    const { classes, children } = this.props
    return (
      <div className={classes.box}>
        <Menu />
        {children}
      </div>
    )
  }
}
