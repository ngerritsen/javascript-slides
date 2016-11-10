import React, { Component, PropTypes, Children, cloneElement } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setTotalSlides as setTotalSlidesAction } from '../actions'

class Slides extends Component {
  componentDidMount() {
    const { setTotalSlides, children } = this.props
    setTotalSlides(children.length)
  }

  _getCurrentSlide() {
    const currentSlideParam = this.props.params.currentSlide
    const currentSlide = currentSlideParam ? Number(currentSlideParam) : 0
    return isNaN(currentSlide) ? 0 : currentSlide
  }

  render() {
    return (
      <div>
        {Children.map(this.props.children, (slide, index) =>
            cloneElement(slide, {
              active: index === this._getCurrentSlide()
            })
        )}
      </div>
    )
  }
}

Slides.propTypes = {
  params: PropTypes.object.isRequired,
  setTotalSlides: PropTypes.func.isRequired
}

function mapStateToProps({ totalSlides }) {
  return { totalSlides }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setTotalSlides: setTotalSlidesAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Slides)
