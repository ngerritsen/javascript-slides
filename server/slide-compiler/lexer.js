const { TABLE_ROW, TITLE, TEXT, CODE, EMPTY, SLIDE, SECONDARY, LIST_ITEM, LINK } = require('../../shared/constants')

const DARK = 'dark'

function lexer(source) {
  const lines = source.split('\n')

  // eslint-disable-next-line max-statements, complexity
  return lines.map(line => {
    if (line.match(/^===/)) {
      const dark = getAfter(line, 4).trim() === DARK
      return statement(SLIDE, [], { dark })
    }

    if (line.match(/^#\s.*/)) {
      const value = getAfter(line, 2)
      return statement(TITLE, value)
    }

    if (line.match(/^-\s.*/)) {
      const value = getAfter(line, 2)
      return statement(LIST_ITEM, value)
    }

    if (line.match(/^##\s.*/)) {
      const value = getAfter(line, 3)
      return statement(SECONDARY, value)
    }

    // eslint-disable-next-line no-useless-escape
    const [, value, link] = line.match(/^\[(.*)\]\((.*)\)/) || []

    if (value && link) {
      return statement(LINK, value, { link })
    }

    if (line.match(/^\|/)) {
      const cells = line
        .trim()
        .slice(1, line.length - 2)
        .split('|')
        .map(cell => cell.trim())

      return statement(TABLE_ROW, '', {
        cells,
        divider: isDividerRow(cells)
      })
    }

    if (line.match(/^```/)) {
      const language = getAfter(line, 3)
      return statement(CODE, '', { language })
    }

    if (!line.trim()) {
      return statement(EMPTY)
    }

    return statement(TEXT, line)
  })
}

function isDividerRow(cells) {
  return cells.reduce((isDivider, cell) => {
    return cell.match(/^-+$/) ? isDivider : false
  }, true)
}

function getAfter(line, after) {
  return line.slice(after, line.length)
}

function statement(type, value = null, properties = {}) {
  return {
    type,
    value,
    properties
  }
}

module.exports = lexer
