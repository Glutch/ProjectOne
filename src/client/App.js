import React, { Component } from 'react'
import injectSheet from 'react-jss'
import './app.css'

const styles = {
  box: {
    background: 'blue'
  }
}

@injectSheet(styles)
export default class App extends Component {

  state = { username: null }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }))
  }

  render() {
    const { classes } = this.props
    const { username } = this.state
    return (
      <div>
        <h1 className={classes.box}>{username ? `hello ${username}` : 'Loading...'}</h1>
      </div>
    )
  }
}
