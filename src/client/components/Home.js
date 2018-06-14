import React, { Component } from 'react'
import injectSheet from 'react-jss'

@injectSheet({
  box: {
    fontFamily: 'sans-serif'
  }
})

export default class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.box}>
        Home
      </div>
    )
  }
}