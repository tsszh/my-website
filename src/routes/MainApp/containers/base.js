import React, { Component } from 'react'

import Header from 'SRC/components/header'
import MainImage from 'SRC/components/main-image'

import PageSwitch from 'SRC/components/animation/page-switch'
import BackgroundSwitch from 'SRC/components/animation/background-switch'

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
    const pageName = this.props.location.pathname.split('/')[1] || 'home'
    const isHomePage = pageName === 'home'
    const isMobilePage = isMobile()
    return (
      <div>
        <div className="full" style={{ position: 'fixed', opacity: 0.9 }}>
          <BackgroundSwitch
            imgs={[
              require('SRC/assets/img/bg/bg1.jpg'),
              require('SRC/assets/img/bg/bg2.jpg'),
              require('SRC/assets/img/bg/bg3.jpg')
            ]}
            timeout={10000}
            fadeout={1500}
            />
        </div>
        <Grid fluid className="non-padding" style={{ height: window.innerHeight }}>
          <Row className="full-height">
            <Col xs={12} md={6} className="full-height non-padding" styleName="home-page" style={{ left: isHomePage && !isMobilePage ? '25%' : 0 }}>
              <Col xs={12} md={3} lg={3} className="non-padding" style={{ height }}>
                <Header currentPathName={pageName} />
              </Col>
              <Col xs={12} md={9} lg={9} className="full-height non-padding">
                <MainImage />
              </Col>
            </Col>
            {
              isHomePage ? null :
                <Col xs={12} md={6} className="non-padding" style={{ height }}>
                  <PageSwitch key={pageName}>
                    <div className="full" key={pageName} styleName="web-page">
                      {this.props.children}
                    </div>
                  </PageSwitch>
                </Col>
            }
          </Row>
        </Grid>
      </div>
    )
  }
}

Base.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  location: React.PropTypes.object
}

export default CSSModules(Base, styles)
