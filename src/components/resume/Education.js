import React, { Component } from 'react'

import resume from './resume'

import CSSModules from 'react-css-modules'
import styles from './style.hcss'

class Education extends Component {
  render() {
    return (
      <div styleName="edu_empl_items">
        {
          resume.education.map(item => (
            <div styleName="item" key={`${item.school}${item.date.join()}`}>
              <h5 className="color" styleName="title">{item.school}</h5>
              <div styleName="degree">{item.degree}</div>
              <div styleName="date"><span className="ti-calendar" />{`${item.date[0]} - ${item.date[1]}`}</div>
              <p className="text-left">{item.description}</p>
              <hr />
              <p className="text-left">{`${item.courses.title}:`}</p>
              <div className="">
                <ul className="container-fluid text-left">
                  {
                    item.courses.courses.map(course => (
                      <li key={course.name} className="col-xs-12 col-sm-6">{`${course.name}${course.grade ? ` (${course.grade})` : ''}`}</li>
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
