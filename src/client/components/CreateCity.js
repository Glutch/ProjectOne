import React, { Component } from 'react'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import { createCity } from '../actions/createCity'

@injectSheet({
  box: {
    padding: 10,
    background: '#ececec',
    margin: '5px 0'
  },
  input: {
    padding: 20,
    fontSize: 16,
  }
})

@connect(state => ({}), {
  createCity
})

export default class City extends Component {

  state = {
    name: '',
    population: ''
  }

  setValue = val => evt => this.setState({[val]: evt.target.value})

  render() {
    const { classes, createCity } = this.props
    const { name, population } = this.state
    return (
      <div className={classes.box}>
        <input
          className={classes.input}
          placeholder="name"
          onChange={this.setValue("name")}
        />
        <input
          className={classes.input}
          placeholder="population"
          onChange={this.setValue("population")}
        />
        <button
          className={classes.input}
          onClick={() => createCity({name, population})}
        >
          Add city
        </button>
      </div>
    )
  }
}
