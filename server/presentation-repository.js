const fsOriginal = require('fs')
const BPromise = require('bluebird')
const path = require('path')

const slideCompiler = require('./slide-compiler')

const fs = BPromise.promisifyAll(fsOriginal)

const presentationRepository = {
  get(presentation) {
    return fs.readFileAsync(path.resolve(`presentations/${presentation}.md`), { encoding: 'utf8' })
      .then(slideCompiler)
  },

  getAll() {
    return fs.readdirAsync(path.resolve('presentations'))
      .then(filenames =>
        filenames.map(filename => path.basename(filename, '.md'))
      )
  }
}

module.exports = presentationRepository
