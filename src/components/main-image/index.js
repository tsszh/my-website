import React, { Component } from 'react'

import CSSModules from 'react-css-modules'
import styles from './style.hcss'

class MainImage extends Component {
  render() {
    return (
      <section className="full" styleName="main-image">
        <div styleName="inner">
          <h1 styleName="name">Zehao Song</h1>
          <div styleName="description">FRONT END DEVELOPER</div>
          <div styleName="social_icons">
            <a href="http://tsszh.github.io" target="_black" className="ti-world"></a>
            <a href="https://www.linkedin.com/in/zehao-song-34b133116" target="_black" className="ti-linkedin linkedin_bg"></a>
            <a href="https://github.com/tsszh" target="_black" className="ti-github github_bg"></a>
          </div>
        </div>
      </section>
    )
  }
}

MainImage.propTypes = {
}

export default CSSModules(MainImage, styles)
