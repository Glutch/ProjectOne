import React, { Component } from 'react'
import injectSheet from 'react-jss'

@injectSheet({
  box: {
    fontFamily: 'sans-serif'
  }
})

export default class Menu extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.box}>
        Menu
      </div>
    )
  }
}