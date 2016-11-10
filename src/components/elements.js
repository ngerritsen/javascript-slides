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
    {children}
  </Highlight>
}

export function Table({ children }) {
  return <table className="element-table">
    <tbody>{children}</tbody>
  </table>
}
