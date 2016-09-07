import React, { Component } from 'react'

import Education from './Education'
import Employment from './Employment'
import Skill from './Skill'

import CSSModules from 'react-css-modules'
import styles from './style.hcss'

class Resume extends Component {
  render() {
    return (
      <section className="page-content container-fluid">
        <div className="vertical_line"></div>
        <h2 className="page_title">RESUME</h2>

        <section className="education_employment">
          <h3 className="section_title">Skills</h3>
          <div className="vertical_line v2"></div>
          <Skill />
        </section>

        <section className="education_employment">
          <h3 className="section_title">experience</h3>
          <div className="vertical_line v2"></div>
          <Employment />
        </section>

        <section className="education_employment">
          <h3 className="section_title">EDUCATION</h3>
          <div className="vertical_line v2"></div>
          <Education />
        </section>

      </section>
    )
  }
}

export default CSSModules(Resume, styles)
