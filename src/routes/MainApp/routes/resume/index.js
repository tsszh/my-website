import React, { Component } from 'react'

import Resume from 'SRC/components/resume'

import CSSModules from 'react-css-modules'
import styles from './style.hcss'

class ResumeWrapper extends Component {
  render() {
    return (
      <Resume />
    )
  }
}

export default CSSModules(ResumeWrapper, styles)
