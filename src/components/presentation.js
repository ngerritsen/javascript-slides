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
          ⬅
          const pirate = 'Captain Hook';
          const shout = 'Arrr!!';
        `}</Code>
        <Table rows={[
          ['pirate', '❌'],
          ['shout', '❌']
        ]}/>
      </Slide>

      <Slide dark>
        <Code>{`
          const pirate = 'Captain Hook';
          ⬅
          const shout = 'Arrr!!';
        `}</Code>
        <Table rows={[
          ['pirate', 'Captain Hook'],
          ['shout', '❌']
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
        Everything hoisted, but <i>const</i>, <i>let</i> and <i>class</i> are not instantiated yet.
      </Slide>

      <Slide dark>
        <Code>{`
          const pirate = 'Captain Hook';
          shout(); ⬅ // Arrr!!

          function shout() {
            return 'Arrr!!';
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
          shout(); ⬅

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
          shout();

          function shout() {
            ⬅
            const message = pirate + ' says: Arrr!!';
            return message;
          }
        `}</Code>
        <Table rows={[
          ['message', '❌'],
          ['parent scope', '*']]}/>
      </Slide>

      <Slide dark>
        <Code>{`
          const pirate = 'Captain Hook';
          shout();

          function shout() {
            const message = pirate ⬅ + ' says: Arrr!!';
            return message;
          }
        `}</Code>
        <Table rows={[
          ['message', '❌'],
          ['parent scope', '*'],
          ['*pirate', 'Captain Hook'],
          ['*shout', '[Function]']
        ]}/>
      </Slide>

      <Slide>
        Scopes inherit from their parent scope.
      </Slide>

      <Slide>
        <Exercise>Scoping like its 2016</Exercise>
      </Slide>

      <Slide>
        Vars are function scoped, let and const are block scoped.
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
        <Exercise>Building a rocket 🚀</Exercise>
      </Slide>

      <Slide>
        When using <i>this</i>, know how the function is executed.
      </Slide>

      <Slide>
        <Exercise>Getting classy 👠</Exercise>
      </Slide>

      <Slide>
        In Javscript, classes are fancy functions that have to be invoked using new.
      </Slide>
    </Slides>
  )
}

export default Presentation
