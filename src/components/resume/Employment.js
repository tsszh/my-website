import React, { Component } from 'react'

import resume from './resume'

import CSSModules from 'react-css-modules'
import styles from './style.hcss'

class Education extends Component {
  render() {
    return (
      <div styleName="edu_empl_items">
        {
          resume.employment.map(item => (
            <div styleName="item" key={`${item.company}${item.position}`}>
              <h5 className="color" styleName="title">{`${item.position}, ${item.company}`}</h5>
              <div styleName="place">{item.place}</div>
              <div styleName="date">{`${item.date[0]} - ${item.date[1]}`}</div>
              <div className="">
                <ul className="container-fluid text-left">
                  {
                    item.description.map((str, i) => (
                      <li key={`${i}${str.substring(0, 10)}`} className="">{str}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default CSSModules(Education, styles)
