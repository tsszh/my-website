import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// import { isMobile } from 'SRC/utils/isMobile'

import CSSModules from 'react-css-modules'
import styles from './style.hcss'

class Transition extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName={{
          enter: styles['example-enter'],
          enterActive: styles['example-enter-active'],
          leave: styles['example-leave'],
          leaveActive: styles['example-leave-active'],
          appear: styles['example-appear'],
          appearActive: styles['example-appear-active']
        }}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        transitionAppear
        transitionAppearTimeout={500}
        >
        {this.props.children}
      </ReactCSSTransitionGroup>
    )
  }
}

Transition.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ])
}

export default CSSModules(Transition, styles)
