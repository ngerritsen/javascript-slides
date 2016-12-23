import React, { PropTypes } from 'react'

import '../styles/slide.scss'
import elementsMap from './elements'

function Slide({ elements, active, dark }) {
  return (
    <div
      className={'slide' + (active ? ' slide--active' : '') + (dark ? ' slide--dark' : '')}
    >
      <div className="slide__content">
        {elements.map((element, index) => {
          const Element = elementsMap[element.type]
          return <Element key={index} value={element.value} {...element.properties}/>
        })}
      </div>
    </div>
  )
}

Slide.propTypes = {
  active: PropTypes.bool,
  dark: PropTypes.bool,
  elements: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Slide
