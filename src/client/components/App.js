import React, { Component } from 'react'
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'

import City from './City'
import CreateCity from './CreateCity'

@injectSheet({
  box: {
    fontFamily: 'sans-serif'
  }
})

@connect(state => ({
  cities: state.cities
}), {})

export default class App extends Component {
  render() {
    const { classes, children, cities } = this.props
    return (
      <div className={classes.box}>
        <Link to="/about">about</Link>
        {children}
        <CreateCity />
        {cities.map((city, key) => <City {...{city, key}} />)}
      </div>
    )
  }
}
