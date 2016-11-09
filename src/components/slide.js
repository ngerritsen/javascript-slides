import React, { PropTypes } from 'react'

import '../styles/slide.scss'

function Slide({ children, active }) {
  return (
    <div className={'slide' + (active ? ' slide--active' : '')}>
      <div className="slide__content">
        {children}
      </div>
    </div>
  )
}

Slide.propTypes = {
  active: PropTypes.bool
}

export default Slide
