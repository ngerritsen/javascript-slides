const constants = require('../../shared/constants')
const { CODE, EMPTY, SLIDE, TEXT, TABLE_ROW, TABLE, NORMAL, HIGHLIGHTED, TITLE, SECONDARY, LIST_ITEM, LIST } = constants
const typesWithFormatting = [TEXT, TITLE, SECONDARY]

function parser(statements) {
  return statements
    .reduce(extractSlides, [])
    .map(parseSlide)
}

function parseSlide(slide) {
  return assign(slide, {
    value: parseElements(slide.value)
  })
}

function parseElements(values) {
  return values.reduce((elements, statement) => {
    return parseElement(elements, statement, getLast(elements))
  }, [])
}

function parseElement(elements, statement, lastElement = {}) { // eslint-disable-line max-statements
  if (isInCodeMode(lastElement)) {
    return parseCodeMode(elements, statement)
  }

  if (statement.type === TABLE_ROW) {
    return parseTableRow(elements, statement, lastElement)
  }

  if (statement.type === EMPTY) {
    return elements
  }

  if (statement.type === LIST_ITEM) {
    return parseListItem(elements, statement, lastElement)
  }

  return parseRegularStatement(elements, statement)
}

function parseTableRow(elements, statement, lastElement) {
  if (lastElement.type === TABLE) {
    return updateTable(elements, statement)
  }

  return [...elements, createTableElement(statement)]
}

function updateTable(elements, statement) {
  if (statement.properties.divider) {
    return updateLast(elements, tableElement => assign(tableElement, {
      properties: assign(tableElement.properties, { hasHeading: true })
    }))
  }

  return updateLast(elements, tableElement => updateTableElement(tableElement, statement))
}

function parseCodeMode(elements, statement) {
  if (statement.type === CODE) {
    return updateLast(elements, codeElement => assign(codeElement, { done: true }))
  }

  return addValueToLastCodeStatement(elements, statement)
}

function parseListItem(elements, statement, lastElement) {
  if (lastElement.type === LIST) {
    return addItemToLastListStatement(elements, statement)
  }

  const list = { type: LIST, value: [statement], properties: {} }
  return [...elements, list]
}

function parseRegularStatement(elements, statement) {
  if (typesWithFormatting.includes(statement.type)) {
    return [...elements, parseTextStatement(statement)]
  }

  return [...elements, statement]
}

function getLast(array) {
  return array[array.length - 1]
}

function isInCodeMode(lastElement) {
  return lastElement.type === CODE && !lastElement.done
}

function extractSlides(slides, statement) {
  if (statement.type === SLIDE) {
    return [...slides, statement]
  }

  return addStatementToLastSlide(slides, statement)
}

function addValueToLastCodeStatement(values, statement) {
  return updateLast(values, codeStatement => assign(codeStatement, {
    value: codeStatement.value + '\n' + (statement.value || '')
  }))
}

function addItemToLastListStatement(values, statement) {
  return updateLast(values, list => assign(list, {
    value: [...list.value, statement]
  }))
}

function addStatementToLastSlide(slides, statement) {
  return updateLast(slides, slide => assign(slide, {
    value: [...slide.value, statement]
  }))
}

function updateLast(array, updater) {
  return array.map((item, index) => {
    const isLast = index === array.length - 1
    return isLast ? updater(item) : item
  })
}

function parseTextStatement(statement) {
  const parsedValue = statement.value
    .split('_')
    .map((value, index) => ({
      format: index % 2 === 0 ? NORMAL : HIGHLIGHTED,
      value
    }))

  return assign(statement, { value: parsedValue })
}

function updateTableElement(tableElement, statement) {
  return assign(tableElement, {
    properties: assign(tableElement.properties, {
      rows: [...tableElement.properties.rows, statement.properties.cells]
    })
  })
}

function createTableElement(statement) {
  return {
    type: TABLE,
    properties: {
      rows: [statement.properties.cells]
    }
  }
}

function assign(...objects) {
  return Object.assign({}, ...objects)
}

module.exports = parser
