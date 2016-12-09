/* eslint-disable react/no-multi-comp, react/prop-types */

import React from 'react';
import Highlight from 'react-highlight';
import { TITLE, TEXT, CODE, SECONDARY } from '../../shared/constants';

import '../styles/elements.scss';

export default {
  [TITLE]: Title,
  [TEXT]: Text,
  [SECONDARY]: Secondary,
  [CODE]: Code
};

function Title({ value }) {
  return <h1 className="element-title">{value}</h1>;
}

function Text({ value }) {
  return <p>{value}</p>;
}

function Secondary({ value }) {
  return <p className="element-secondary">{value}</p>;
}

function Code({ value, language }) {
  return <Highlight className={language}>
    {value}
  </Highlight>;
}

export function Table({ rows }) {
  return <table className="element-table">
    <tbody>
      {rows.map((row, rowIndex) =>
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) =>
            <td key={cellIndex}>{cell}</td>
          )}
        </tr>
      )}
    </tbody>
  </table>;
}

export function Exercise({ children }) {
  return <p className="element-exercise">
    {children}
  </p>;
}
