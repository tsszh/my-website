import React, { Component } from 'react'

class SetInterval extends Component {
  constructor(props) {
    super(props)
    this.intervals = []
    this.setInterval = this.setInterval.bind(this)
  }
  componentWillUnmount() {
    this.intervals.forEach(clearInterval)
  }
  setInterval(...argus) {
    this.intervals.push(setInterval.apply(null, argus))
  }
  render() {
    return <div />
  }
}

export default SetInterval
