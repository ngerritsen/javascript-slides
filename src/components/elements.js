/* eslint-disable react/no-multi-comp, react/prop-types */

import React from 'react'
import Highlight from 'react-highlight'

import '../styles/elements.scss'

export function Title({ children }) {
  return <h1 className="element-title">{children}</h1>
}

export function Secondary({ children }) {
  return <p className="element-secondary">{children}</p>
}

export function Code({ children, language = 'javascript' }) {
  return <Highlight className={language}>
    {dedent(children)}
  </Highlight>
}

export function Table({ rows }) {
  return <table className="element-table">
    <tbody>
      {rows.map(row =>
        <tr>
          {row.map(cell => <td>{cell}</td>)}
        </tr>
      )}
    </tbody>
  </table>
}

export function Exercise({ children }) {
  return <p className="element-exercise">
    {children}
  </p>
}

function dedent(code) {
  const lines = code.split('\n');
  const { spaces: baseIndentation } = lines[1]
    .split('')
    .reduce((result, char) => {
      const isSpace = char === ' ';
      return {
        spaces: isSpace && !result.done ? result.spaces + 1 : result.spaces,
        done: result.done || !isSpace
      }
    }, { done: false, spaces: 0 })

    return lines
      .map(line => line.slice(baseIndentation, line.length))
      .join('\n')
}
