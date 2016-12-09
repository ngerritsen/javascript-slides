const { TITLE, TEXT, CODE, EMPTY, SLIDE, SECONDARY } = require('../../shared/constants');

const DARK = 'dark';

function lexer(source) {
  const lines = source.split('\n');

  // eslint-disable-next-line max-statements, complexity
  return lines.map(line => {
    if (line.match(/^===/)) {
      const dark = getAfter(line, 4).trim() === DARK;
      return statement(SLIDE, [], { dark });
    }

    if (line.match(/^#\s.*/)) {
      const value = getAfter(line, 2);
      return statement(TITLE, value);
    }

    if (line.match(/^##\s.*/)) {
      const value = getAfter(line, 3);
      return statement(SECONDARY, value);
    }

    if (line.match(/^```/)) {
      const language = getAfter(line, 3);
      return statement(CODE, '', { language });
    }

    if (!line.trim()) {
      return statement(EMPTY);
    }

    return statement(TEXT, line);
  });
}

function getAfter(line, after) {
  return line.slice(after, line.length);
}

function statement(type, value = null, properties = {}) {
  return {
    type,
    value,
    properties
  };
}

module.exports = lexer;
