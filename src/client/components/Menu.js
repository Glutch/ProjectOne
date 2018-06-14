import React, { Component } from 'react'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'

@injectSheet({
  link: {
    padding: 5
  }
})

export default class Menu extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.box}>
        <Link className={classes.link} to="/">Home</Link>
        <Link className={classes.link} to="/cats">Cats</Link>
      </div>
    )
  }
}