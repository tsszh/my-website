import React, { Component } from 'react'

import CSSModules from 'react-css-modules'
import styles from './style.hcss'

class About extends Component {
  render() {
    return (
      <section className="page-content">
        <div className="vertical_line"></div>
        <h2 className="page_title">ABOUT ME</h2>

        <section styleName="about_me_description">
          <p>
            Hello, I'm Zehao, a passionate programmer and developer.
            I currently reside in Melbourne, California. I love creating new
            content, photography, good cookery and listening to music.
          </p>
          <p>
            I am currently working as a web designer at <a href="#">TRIA</a>.
          </p>
        </section>

        <section className="container-fluid" styleName="personal_info">
          <h3 className="section_title">PERSONAL INFO</h3>
          <div className="vertical_line v2"></div>

          <div styleName="personal_info">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4" styleName="item">
                  <h5>NAME</h5>
                  <div className="value">Zehao Song</div>
                </div>
                <div className="col-md-4" styleName="item">
                  <h5>BIRTHDAY</h5>
                  <div className="value">October 28, 1990</div>
                </div>
                <div className="col-md-4" styleName="item">
                  <h5>ADDRESS</h5>
                  <div className="value">Illinois, USA</div>
                </div>
                <div className="col-md-4" styleName="item">
                  <h5>LINKEDIN</h5>
                  <div className="value"><a href="http://www.linkedin.com/in/tsszh" target="_blank">www.linkedin.com/in/tsszh</a></div>
                </div>
                <div className="col-md-4" styleName="item">
                  <h5>EMAIL</h5>
                  <div className="value"><a href="mailto:songzhpku@gmail.com?Subject=Hello" target="_top">songzhpku@gmail.com</a></div>
                </div>
                <div className="col-md-4" styleName="item">
                  <h5>WEBSITE</h5>
                  <div className="value"><a href="http://tsszh.github.io" target="_blank">tsszh.github.io</a></div>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </section>
      </section>
    )
  }
}

export default CSSModules(About, styles)
