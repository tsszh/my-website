import React, { Component } from 'react'

import { isMobile } from 'SRC/utils/isMobile'

import HeaderVertical from './HeaderVertical'
import HeaderHorizontal from './HeaderHorizontal'

class Header extends Component {
  render() {
    if (isMobile()) {
      return <HeaderHorizontal />
    }
    return <HeaderVertical />
  }
}

Header.propTypes = {
}

export default Header
