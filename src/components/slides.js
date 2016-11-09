import React, { Component, PropTypes, Children, cloneElement } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setTotalSlides as setTotalSlidesAction } from '../actions'

class Slides extends Component {
  componentDidMount() {
    const { setTotalSlides, children } = this.props
    setTotalSlides(children.length)
  }

  render() {
    const { children, currentSlide } = this.props
    return (
      <div>
        {Children.map(children, (slide, index) =>
            cloneElement(slide, { active: index === currentSlide })
        )}
      </div>
    )
  }
}

Slides.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  setTotalSlides: PropTypes.func.isRequired
}

export default connect(
  state => state,
  dispatch => bindActionCreators({ setTotalSlides: setTotalSlidesAction }, dispatch)
)(Slides)
