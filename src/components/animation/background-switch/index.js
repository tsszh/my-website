import React from 'react'
import SetInterval from 'SRC/components/set-interval'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// import { isMobile } from 'SRC/utils/isMobile'

import CSSModules from 'react-css-modules'
import styles from './style.hcss'

class BackgroundSwitch extends SetInterval {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
    this.tick = this.tick.bind(this)
  }
  componentDidMount() {
    super.componentDidMount()
    this.setInterval(this.tick, this.props.timeout)
  }
  tick() {
    this.setState({
      index: (this.state.index + 1) % this.props.imgs.length
    })
  }
  render() {
    const { fadeout } = this.props
    const imgSrc = this.props.imgs[this.state.index]
    const divStyle = {
      background: `url(${imgSrc}) no-repeat fixed center top`,
      backgroundSize: 'cover',
      WebkitTransitionDuration: `${fadeout / 1000}s`,
      transitionDuration: `${fadeout / 1000}s`
    }
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
        transitionEnterTimeout={fadeout}
        transitionLeaveTimeout={fadeout}
        transitionAppear
        transitionAppearTimeout={fadeout}
        >
        <div className="full" key={imgSrc} style={divStyle} />
      </ReactCSSTransitionGroup>
    )
  }
}

BackgroundSwitch.propTypes = {
  imgs: React.PropTypes.array.isRequired,
  timeout: React.PropTypes.number,
  fadeout: React.PropTypes.number
}

BackgroundSwitch.defaultProps = {
  timeout: 2000,
  fadeout: 750
}

export default CSSModules(BackgroundSwitch, styles)
