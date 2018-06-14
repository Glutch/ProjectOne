import React, { Component } from 'react'
import { connect } from 'react-redux'
import injectSheet from 'react-jss'

import City from './City'
import CreateCity from './CreateCity'

@injectSheet({
  box: {
    fontFamily: 'sans-serif'
  }
})

@connect(state => ({
  cities: state.cities
}))

export default class Home extends Component {
  render() {
    const { classes, cities } = this.props
    return (
      <div className={classes.box}>
        <CreateCity />
        {cities.map((city, key) => <City {...{city, key}} />)}
      </div>
    )
  }
}