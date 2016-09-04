import React, { Component } from 'react'

import { Nav, NavItem } from 'react-bootstrap'

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
      activeNavKey: 'home'
    }
    this.handleNavSelection = this.handleNavSelection.bind(this)
  }
  handleNavSelection(selectedKey) {
    this.setState({
      activeNavKey: selectedKey
    })
  }
  render() {
    const height = `${100 / menuItems.length}%`
    return (
      <div className="full-height" styleName="navigation">
        <Nav className="full-height" bsStyle="pills" stacked activeKey={this.state.activeNavKey} onSelect={this.handleNavSelection}>
          {
            menuItems.map(item => (
              <NavItem key={item.name} eventKey={item.name} style={{ height }}>
                <i className={item.icon}></i><span styleName="text">{item.name}</span>
              </NavItem>
            ))
          }
        </Nav>
      </div>
    )
  }
}

Header.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ])
}

export default CSSModules(Header, styles)
