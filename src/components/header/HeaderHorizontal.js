import React, { Component } from 'react'

import { Nav, NavItem, Grid, Row, Col } from 'react-bootstrap'

import CSSModules from 'react-css-modules'
import styles from './style.hcss'

const menuItems = [
  {
    name: 'home',
    icon: 'ti-home'
  }, {
    name: 'about',
    icon: 'ti-user'
  }, {
    name: 'resume',
    icon: 'ti-book'
  }, {
    name: 'demo',
    icon: 'ti-image'
  }, {
    name: 'blog',
    icon: 'ti-list'
  }, {
    name: 'contact',
    icon: 'ti-email'
  }
]

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeNavKey: 'home',
      menuCollapse: true
    }
    this.handleNavSelection = this.handleNavSelection.bind(this)
    this.handleNavCollapse = this.handleNavCollapse.bind(this)
  }
  componentWillMount() {
    this.setState({
      activeNavKey: this.props.currentPathName || 'home'
    })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      activeNavKey: nextProps.currentPathName || 'home'
    })
  }
  handleNavSelection(selectedKey) {
    this.setState({
      activeNavKey: selectedKey
    })
    this.setState({
      menuCollapse: true
    })
    this.context.router.push(`/${selectedKey}`)
  }
  handleNavCollapse() {
    this.setState({
      menuCollapse: !this.state.menuCollapse
    })
  }
  render() {
    return (
      <div>
        <div style={{ height: '57px' }}></div>
        <div className="fixed-position full-width" style={{ top: 0, zIndex: 100 }}>
          <Grid fluid className="non-padding">
            <Row styleName="navbar">
              <Col xs={8}><h3><span className="cursor-default">Zehao's Resume</span></h3></Col>
              <Col xs={4} className="text-right"><h3><i className="cursor-pointer ti-menu" onClick={this.handleNavCollapse}></i></h3></Col>
            </Row>
          </Grid>
          <div styleName="navigation" style={{ height: this.state.menuCollapse ? 0 : 'auto', background: 'rgba(134, 134, 134, 0.8)' }}>
            <Nav className="full-height" bsStyle="pills" stacked activeKey={this.state.activeNavKey} onSelect={this.handleNavSelection}>
              {
                menuItems.map(item => (
                  <NavItem key={item.name} eventKey={item.name}>
                    <i className={item.icon}></i><span styleName="text">{item.name}</span>
                  </NavItem>
                ))
              }
            </Nav>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  currentPathName: React.PropTypes.string
}

Header.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default CSSModules(Header, styles)
