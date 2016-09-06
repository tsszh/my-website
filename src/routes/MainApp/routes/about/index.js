import React, { Component } from 'react'

import CSSModules from 'react-css-modules'
import styles from './style.hcss'

class About extends Component {
  render() {
    return (
      <div>About</div>
    )
  }
}

export default CSSModules(About, styles)
