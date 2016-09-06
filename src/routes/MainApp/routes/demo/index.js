import React, { Component } from 'react'

import CSSModules from 'react-css-modules'
import styles from './style.hcss'

class Demo extends Component {
  render() {
    return (
      <div> Demo </div>
    )
  }
}

export default CSSModules(Demo, styles)
