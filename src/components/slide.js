import React, { PropTypes } from 'react'

import '../styles/slide.scss'

function Slide({ children, active, dark }) {
  return (
    <div
      className={'slide' + (active ? ' slide--active' : '') + (dark ? ' slide--dark' : '')}
    >
      <div className="slide__content">
        {children}
      </div>
    </div>
  )
}

Slide.propTypes = {
  active: PropTypes.bool,
  dark: PropTypes.bool
}

export default Slide
