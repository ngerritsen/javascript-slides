const lexer = require('./lexer')
const parser = require('./parser')

function compilePresentation(source) {
  return parser(lexer(source))
}

module.exports = compilePresentation
