import React, { Component, Fragment } from 'react'

export default class About extends Component {

  state = { img: '' }

  fetchCat = () =>
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(res => this.setState({img: res.message}))

  componentDidMount() {
    this.fetchCat()
  }

  render() {
    const { classes } = this.props
    const { img } = this.state
    return (
      <Fragment>
        <button onClick={() => this.fetchCat()}>Fetch new cat</button>
        <div>
          <img src={img} />
        </div>
      </Fragment>
    )
  }
}