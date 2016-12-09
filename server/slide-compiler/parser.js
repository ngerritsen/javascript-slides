const { CODE, EMPTY, SLIDE } = require('../../shared/constants');

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
  return values.reduce((state, statement) => {
    if (state.inCode) {
      return parseInCode(state, statement);
    }

    if (statement.type === CODE) {
      return {
        parsedElements: [...state.parsedElements, statement],
        inCode: true
      };
    }

    if (statement.type === EMPTY) {
      return state;
    }

    return assign(state, {
      parsedElements: [...state.parsedElements, statement]
    });
  }, {
    parsedElements: [],
    inCode: false
  }).parsedElements;
}

function parseInCode(state, statement) {
  return statement.type === CODE ?
    assign(state, { inCode: false }) :
    assign(state, { parsedElements: addValueToLastCodeStatement(state.parsedElements, statement) });
}

function extractSlides(slides, statement) {
  return statement.type === SLIDE ?
    [...slides, statement] :
    addStatementToLastSlide(slides, statement);
}

function addValueToLastCodeStatement(values, statement) {
  return updateLast(values, codeStatement => assign(codeStatement, {
    value: codeStatement.value + '\n' + statement.value
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

function assign(...objects) {
  return Object.assign({}, ...objects);
}

module.exports = parser;
