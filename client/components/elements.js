/* eslint-disable react/no-multi-comp, react/prop-types */

import React from 'react'
import Highlight from 'react-highlight'
import { TITLE, TEXT, TABLE, CODE, SECONDARY, EMPTY, HIGHLIGHTED, LIST, LINK } from '../../shared/constants'

import '../styles/elements.scss'

export default {
  [TITLE]: Title,
  [TEXT]: Text,
  [EMPTY]: Text,
  [SECONDARY]: Secondary,
  [LIST]: List,
  [CODE]: Code,
  [LINK]: Link,
  [TABLE]: Table
}

function Title({ value }) {
  return <h1 className="element-title">{formatText(value)}</h1>
}

function Text({ value }) {
  return <p>{formatText(value)}</p>
}

function Link({ value, link }) {
  return <a href={link} className="element-link">{value}</a>
}

function Secondary({ value }) {
  return <p className="element-secondary">{formatText(value)}</p>
}

function Code({ value, language }) {
  return <Highlight className={language}>
    {value}
  </Highlight>
}

function List({ value }) {
  return <ul className="element-list">
    {value.map((listItem, index) =>
      <li className="element-list__item" key={index}>{listItem.value}</li>
    )}
  </ul>
}

export function Table({ rows, hasHeading }) {
  const bodyRows = hasHeading ? rows.slice(1) : rows
  return <table className="element-table">
    {
      hasHeading &&
      <thead>
        <tr>{rows[0].map((cell, cellIndex) => <th key={cellIndex}>{cell}</th>)}</tr>
      </thead>
    }
    <tbody>
      {bodyRows.map((row, rowIndex) =>
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) =>
            <td key={cellIndex}>{cell}</td>
          )}
        </tr>
      )}
    </tbody>
  </table>
}

function formatText(text) {
  if (typeof text === 'string') {
    return text
  }

  return text.map(({ format, value }, index) =>
    format === HIGHLIGHTED ?
      <span className="element-highlight" key={index}>{value}</span> :
      <span key={index}>{value}</span>
  )
}
