import React, { Component } from 'react'

import { isMobile } from 'SRC/utils/isMobile'

import HeaderVertical from './HeaderVertical'
import HeaderHorizontal from './HeaderHorizontal'

class Header extends Component {
  render() {
    if (isMobile()) {
      return <HeaderHorizontal {...this.props} />
    }
    return <HeaderVertical {...this.props} />
  }
}

Header.propTypes = {
}

export default Header
