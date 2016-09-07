import React, { Component } from 'react'

import wordcloud from 'wordcloud'

import CSSModules from 'react-css-modules'
import styles from './style.hcss'

const colorTheme = [
  '#ce3440', '#7e42a6', '#bc0a13', '#4362a7', '#ca8f57', '#4ba894', '#4ba894', '#b95c28', '#638db2', '#dbcc58', '#1b3c69', '#d5a753'
]

class WordCloud extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.createCanvas = this.createCanvas.bind(this)
  }
  componentWillMount() {
    this.setState({ list: this.props.list })
  }
  componentDidMount() {
    this.createCanvas()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ list: nextProps.list })
    this.createCanvas()
  }
  createCanvas() {
    const canvas = this.refs.canv
    canvas.style.width = '100%'
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetWidth * 0.4
    wordcloud(canvas, {
      list: this.state.list,
      gridSize: 10,
      weightFactor: (weight) => (weight * canvas.offsetWidth / 15),
      fontFamily: 'Finger Paint, cursive, sans-serif',
      color: () => (colorTheme[Math.floor(Math.random() * colorTheme.length)]),
      hover: window.drawBox,
      shuffle: true,
      drawOutOfBound: false,
      rotateRatio: 0,
      ellipticity: 0.3,
      backgroundColor: 'transparent'
    })
  }
  render() {
    const { style } = this.props
    return (
      <div style={style}>
        <canvas ref="canv" />
      </div>
    )
  }
}

WordCloud.propTypes = {
  style: React.PropTypes.object,
  list: React.PropTypes.array
}

export default CSSModules(WordCloud, styles)
