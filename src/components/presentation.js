import React from 'react'

import { Secondary, Code, Title } from './elements'
import Slides from './slides'
import Slide from './slide'

function Presentation() {
  return (
    <Slides>
      <Slide>
        <Title>Javascript</Title>
        <Secondary>scope & context</Secondary>
      </Slide>
      <Slide>
        <Title>Scope 🔭</Title>
      </Slide>
      <Slide>A scope is an object with all variables you have access to at a certain point</Slide>
      <Slide dark>
        <Code>{
`import React, { PropTypes } from 'react'
var b = 'b'

// Here <---
`
        }</Code>

        <table>
          <tbody>
            <tr>
              <td>a</td>
              <td>'a'</td>
            </tr>
            <tr>
              <td>b</td>
              <td>'b'</td>
            </tr>
          </tbody>
        </table>
      </Slide>
    </Slides>
  )
}

export default Presentation
