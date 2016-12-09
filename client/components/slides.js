import React, { PropTypes } from 'react';

import Slide from './slide';

function Slides({ slides, currentSlide }) {
  return (
    <div>
      {slides.map((slide, index) =>
        <Slide
          key={index}
          active={index === currentSlide}
          elements={slide.value}
          {...slide.properties}
        />
      )}
    </div>
  );
}

Slides.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Slides;
