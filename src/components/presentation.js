import React from 'react'

import { Secondary, Code, Title, Table } from './elements'
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
        <Title>Scope 🔭</Title>
      </Slide>

      <Slide>
        A scope is an object with all variables you have access to at a certain point
      </Slide>

      <Slide dark>
        <Code>{
`⬅
const pirate = 'Captain Hook';
const shout = 'Arrr!!';`
        }</Code>
      </Slide>

      <Slide dark>
        <Code>{
`⬅
const pirate = 'Captain Hook';
const shout = 'Arrr!!';`
        }</Code>
        <Table>
          <tr>
            <td>pirate</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>shout</td>
            <td>❌</td>
          </tr>
        </Table>
      </Slide>

      <Slide dark>
        <Code>{
`const pirate = 'Captain Hook';
⬅
const shout = 'Arrr!!';`
        }</Code>
        <Table>
          <tr>
            <td>pirate</td>
            <td>'Captain Hook'</td>
          </tr>
          <tr>
            <td>shout</td>
            <td>❌</td>
          </tr>
        </Table>
      </Slide>

      <Slide dark>
        <Code>{
`const pirate = 'Captain Hook';
const shout = 'Arrr!!';
⬅`
        }</Code>
        <Table>
          <tr>
            <td>pirate</td>
            <td>'Captain Hook'</td>
          </tr>
          <tr>
            <td>shout</td>
            <td>'Arrr!!'</td>
          </tr>
        </Table>
      </Slide>

      <Slide dark>
        <Code>{
`const pirate = 'Captain Hook';
⬅
var shout = 'Arrr!!';`
        }</Code>
        <Table>
          <tr>
            <td>pirate</td>
            <td>'Captain Hook'</td>
          </tr>
          <tr>
            <td>shout</td>
            <td>'Arrr!!'</td>
          </tr>
        </Table>
      </Slide>

      <Slide dark>
        <Code>{
`const pirate = 'Captain Hook';
⬅
function shout() {
  return 'Arrr!!';
}`
        }</Code>
        <Table>
          <tr>
            <td>pirate</td>
            <td>'Captain Hook'</td>
          </tr>
          <tr>
            <td>shout</td>
            <td>[Function]</td>
          </tr>
        </Table>
      </Slide>

      <Slide dark>
        <Code>{
`const pirate = 'Captain Hook';
shout(); ⬅ // Arrr!!

function shout() {
  return 'Arrr!!';
}`
        }</Code>
        <Table>
          <tr>
            <td>pirate</td>
            <td>'Captain Hook'</td>
          </tr>
          <tr>
            <td>shout</td>
            <td>[Function]</td>
          </tr>
        </Table>
      </Slide>

      <Slide dark>
        <Code>{
`const pirate = 'Captain Hook';
shout(); ⬅ // Arrr!!

function shout() {
  const message = pirate + ' says: Arrr!!';
  return message;
}`
        }</Code>
        <Table>
          <tr>
            <td>pirate</td>
            <td>'Captain Hook'</td>
          </tr>
          <tr>
            <td>shout</td>
            <td>[Function]</td>
          </tr>
        </Table>
      </Slide>

      <Slide dark>
        <Code>{
`const pirate = 'Captain Hook';
shout();

function shout() {
  ⬅
  const message = pirate + ' says: Arrr!!';
  return message;
}`
        }</Code>
        <Table>
          <tr>
            <td>message</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>parent scope</td>
            <td>*</td>
          </tr>
        </Table>
      </Slide>

      <Slide dark>
        <Code>{
`const pirate = 'Captain Hook';
shout();

function shout() {
  const message = pirate ⬅ + ' says: Arrr!!';
  return message;
}`
        }</Code>
        <Table>
          <tr>
            <td>message</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>parent scope</td>
            <td>*</td>
          </tr>

          <tr>
            <td>*pirate</td>
            <td>'Captain Hook'</td>
          </tr>
          <tr>
            <td>*shout</td>
            <td>[Function]</td>
          </tr>
        </Table>
      </Slide>
    </Slides>
  )
}

export default Presentation
