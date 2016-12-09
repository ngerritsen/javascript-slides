import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPresentation } from '../actions';
import Slides from './slides';

class Presentation extends Component {
  constructor(props) {
    super(props);
    props.fetchPresentation(props.presentation);
  }

  render() {
    const { slides, currentSlide, presentation } = this.props;

    if (slides) {
      return <Slides slides={slides} currentSlide={currentSlide}/>;
    }

    return <p>Loading "{presentation}"...</p>;
  }
}

Presentation.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  fetchPresentation: PropTypes.func.isRequired,
  presentation: PropTypes.string.isRequired,
  slides: PropTypes.array
};

function mapStateToProps({ presentation }, { params }) {
  return {
    slides: presentation.slides,
    currentSlide: Number(params.currentSlide),
    presentation: params.presentation
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPresentation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
