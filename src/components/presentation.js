import React from 'react'

import { Secondary, Code, Title, Table, Exercise } from './elements'
import Slides from './slides'
import Slide from './slide'

function Presentation(props) {
  return (
    <Slides {...props}>
      <Slide>
        <Title>Javascript</Title>
        <Secondary>scope & context</Secondary>
      </Slide>

      <Slide>
        📋
      </Slide>

      <Slide>
        <Title>Scope 🔭</Title>
      </Slide>

      <Slide>
        The scope is an imaginary object with all variables you have access to at a certain point.
      </Slide>

      <Slide dark>
        <Code>{`
          ⬅
          const pirate = 'Captain Hook';
          const shout = 'Arrr!!';
        `}</Code>
      </Slide>

      <Slide dark>
        <Code>{`
          const pirate = 'Captain Hook';
          ⬅
          const shout = 'Arrr!!';
        `}</Code>
        <Table rows={[
          ['pirate', 'Captain Hook']
        ]}/>
      </Slide>

      <Slide dark>
        <Code>{`
          const pirate = 'Captain Hook';
          const shout = 'Arrr!!';
          ⬅
        `}</Code>
        <Table rows={[
          ['pirate', 'Captain Hook'],
          ['shout', 'Arrr!!']
        ]}/>
      </Slide>

      <Slide>
        <Exercise>Hoisting the pirate.</Exercise>
      </Slide>

      <Slide>
        Only <i>function</i> hoisting is useful. <i>var</i> is hoisted but not assigned.
      </Slide>

      <Slide dark>
        <Code>{`
          const pirate = 'Captain Hook';
          const pirateMessage = shout(); ⬅

          function shout() {
            const message = pirate + ' says: Arrr!!';
            return message;
          }
        `}</Code>
        <Table rows={[
          ['pirate', 'Captain Hook'],
          ['shout', '[Function]']
        ]}/>
      </Slide>

      <Slide dark>
        <Code>{`
          const pirate = 'Captain Hook';
          const pirateMessage = shout();

          function shout() {
            const message = pirate ⬅ + ' says: Arrr!!';
            return message;
          }
        `}</Code>
        <Table rows={[
          ['parent scope', '*'],
          ['*pirate', 'Captain Hook'],
          ['*shout', '[Function]']
        ]}/>
      </Slide>

      <Slide dark>
        <Code>{`
          const pirate = 'Captain Hook';
          const pirateMessage = shout();

          function shout() {
            const message = pirate + ' says: Arrr!!';
            return message; ⬅
          }
        `}</Code>
        <Table rows={[
          ['message', 'Captain hook says: Arrr!!'],
          ['parent scope', '*'],
          ['*pirate', 'Captain Hook'],
          ['*shout', '[Function]']
        ]}/>
      </Slide>

      <Slide dark>
        <Code>{`
          const pirate = 'Captain Hook';
          const pirateMessage = shout();
          ⬅

          function shout() {
            const message = pirate + ' says: Arrr!!';
            return message;
          }
        `}</Code>
        <Table rows={[
          ['pirateMessage', 'Captain hook says: Arrr!!'],
          ['pirate', 'Captain Hook'],
          ['shout', '[Function]']
        ]}/>
      </Slide>

      <Slide>
        Scopes inherit from their parent scope.
      </Slide>

      <Slide>
        <Exercise>Scoping like its 2016</Exercise>
      </Slide>

      <Slide>
        <i>vars</i> are function scoped, <i>let</i> and <i>const</i> are block scoped.
      </Slide>

      <Slide>
        <Exercise>Filescope</Exercise>
      </Slide>

      <Slide>
        Node.js has a file scope, the browser has IIFY's instead.
      </Slide>

      <Slide>
        <Title>Context 🌍</Title>
      </Slide>

      <Slide>
        context !== scope
      </Slide>

      <Slide>
        The context is an object determined by how a function is called.
      </Slide>

      <Slide>
        <Exercise>Creating a rocket 🚀</Exercise>
      </Slide>

      <Slide>
        Take care when using <i>this</i>, the caller has control over what it is.
      </Slide>

      <Slide>
        <Exercise>Constructing a rocket 🚀</Exercise>
      </Slide>

      <Slide>
        Constructor functions create objects by using <i>context</i>.
      </Slide>

      <Slide>
        <Exercise>Prototyping a rocket 🚀</Exercise>
      </Slide>

      <Slide>
        Context inherits from the <i>prototype</i>.
      </Slide>

      <Slide>
        <Exercise>Getting classy 👠</Exercise>
      </Slide>

      <Slide>
        In Javscript, classes are <i>fancy</i>, "better" constructor functions.
      </Slide>

      <Slide>
        <Code>{`
          class MyModule {
            constructor() {
              this.message = 'Hello world!';
            }

            _init() {
              this._element.addEventListener(this._onClick)
            }

            _onClick() {
              alert(this.message)
            }
          }
        `}</Code>
      </Slide>

      <Slide>
        <Code>{`
          class MyModule {
            constructor() {
              this.message = 'Hello world!';
            }

            _init() {
              this._element.addEventListener(this._onClick.bind(this))
            }

            _onClick() {
              alert(this.message)
            }
          }
        `}</Code>
      </Slide>

      <Slide>
        <Exercise>Rockets without context 🚀</Exercise>
      </Slide>

      <Slide>
        Always weight the benefits of using context against the downsides.
      </Slide>
    </Slides>
  )
}

export default Presentation
