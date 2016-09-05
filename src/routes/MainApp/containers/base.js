import React, { Component } from 'react'

import Header from 'SRC/components/header'
import MainImage from 'SRC/components/main-image'

import { isMobile } from 'SRC/utils/isMobile'
import { Grid, Row, Col } from 'react-bootstrap'

import CSSModules from 'react-css-modules'
import styles from './base.hcss'

class Base extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: window.innerWidth
    }
    this.handleResize = this.handleResize.bind(this)
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  handleResize() {
    this.setState({
      windowWidth: window.innerWidth
    })
  }
  render() {
    const height = isMobile() ? 'auto' : '100%'
    return (
      <Grid fluid className="non-padding" style={{ height: window.innerHeight }}>
        <Row className="full-height">
          <Col xs={12} md={6} className="full-height non-padding">
            <Col xs={12} md={3} lg={3} className="non-padding" style={{ height }}>
              <Header />
            </Col>
            <Col xs={12} md={9} lg={9} className="full-height non-padding">
              <MainImage />
            </Col>
          </Col>
          <Col xs={12} md={6} className="non-padding" style={{ height }}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    )
  }
}

Base.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ])
}

export default CSSModules(Base, styles)
