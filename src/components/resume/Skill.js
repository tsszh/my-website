import React, { Component } from 'react'

import WordCloud from 'SRC/components/wordcloud'

import resume from './resume'

import CSSModules from 'react-css-modules'
import styles from './style.hcss'

class Skill extends Component {
  render() {
    // <div className="container-fluid">
    //   <div className="col-xs-12">
    //   </div>
    //   <div className="col-xs-12 col-md-6" styleName="skills">
    //     <div styleName="skill">
    //       <h6>HTML5 / CSS3</h6>
    //       <div styleName="title">80%</div>
    //       <div styleName="progress">
    //         <div styleName="progress-bar" className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="col-xs-12 col-md-6" styleName="skills">
    //     <div styleName="skill">
    //       <h6>HTML5 / CSS3</h6>
    //       <div styleName="title">80%</div>
    //       <div styleName="progress">
    //         <div styleName="progress-bar" className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    return (
      <WordCloud list={resume.skills.map(x => [x.name, x.score])} style={{ width: '100%' }} />
    )
  }
}

export default CSSModules(Skill, styles)
