import React, { Component } from 'react'
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { removeCity } from '../actions/removeCity'

@injectSheet({
  box: {
    padding: 10,
    background: '#ececec',
    margin: '5px 0',
    position: 'relative',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  delete: {
    position: 'absolute',
    right: 0,
    top: 0,
    cursor: 'pointer',
    padding: 20,
  }
})

@connect(state => ({}), {
  removeCity
})

export default class City extends Component {
  render() {
    const { classes, city, removeCity } = this.props
    const { name, population } = city
    return (
      <div className={classes.box}>
        <div className={classes.name}>{name}</div>
        <div>{population}</div>
        <div
          className={classes.delete}
          onClick={() => removeCity(city)}
        >
          x
        </div>
      </div>
    )
  }
}
