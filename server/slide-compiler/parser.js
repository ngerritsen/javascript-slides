const constants = require('../../shared/constants');
const { CODE, EMPTY, SLIDE, TEXT, NORMAL, HIGHLIGHTED, TITLE, SECONDARY, LIST_ITEM, LIST } = constants;

function parser(statements) {
  return statements
    .reduce(extractSlides, [])
    .map(parseSlide);
}

function parseSlide(slide) {
  return assign(slide, {
    value: parseElements(slide.value)
  });
}

function parseElements(values) {
  return values.reduce((parsedElements, statement) => { // eslint-disable-line complexity, max-statements
    const lastElement = parsedElements[parsedElements.length - 1];

    if (lastElement.type === CODE) {
      return addValueToLastCodeStatement(parsedElements, statement);
    }

    if (lastElement.type === LIST && statement.type === LIST_ITEM) {
      return addItemToLastListStatement(parsedElements, statement);
    }

    if (statement.type === LIST_ITEM) {
      return [
        ...parsedElements,
        { type: LIST, value: [statement], properties: {} }
      ]
    }

    if (statement.type === EMPTY) {
      return parsedElements;
    }

    if (statement.type === TEXT || statement.type === TITLE || statement.type === SECONDARY) {
      return [...parsedElements, parseTextStatement(statement)];
    }

    return [...parsedElements, statement];
  }, []);
}

function extractSlides(slides, statement) {
  return statement.type === SLIDE ?
    [...slides, statement] :
    addStatementToLastSlide(slides, statement);
}

function addValueToLastCodeStatement(values, statement) {
  return updateLast(values, codeStatement => assign(codeStatement, {
    value: codeStatement.value + '\n' + (statement.value || '')
  }));
}

function addItemToLastListStatement(values, statement) {
  return updateLast(values, list => assign(list, {
    value: [...list.value, statement]
  }));
}

function addStatementToLastSlide(slides, statement) {
  return updateLast(slides, slide => assign(slide, {
    value: [...slide.value, statement]
  }));
}

function updateLast(array, updater) {
  return array.map((item, index) => {
    return index === array.length - 1 ?
      updater(item) :
      item;
  });
}

function parseTextStatement(statement) {
  const parsedValue = statement.value
    .split('_')
    .map((value, index) => ({
      format: index % 2 === 0 ? NORMAL : HIGHLIGHTED,
      value
    }));

  return assign(statement, { value: parsedValue });
}

function assign(...objects) {
  return Object.assign({}, ...objects);
}

module.exports = parser;
