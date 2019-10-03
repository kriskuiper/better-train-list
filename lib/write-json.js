const { promisify } = require('util')
const path = require('path')
const mkdir = promisify(require('mkdirp'))
const writeFile = promisify(require('fs').writeFile)

function writeJson(data, outputPath) {
  const directory = path.join(__dirname, '../public/data/', outputPath)
  const fileName = path.join(directory, 'index.json')

  mkdir(directory)
    .then(writeFile(fileName, JSON.stringify(data), 'utf-8'))
    .then(console.log(`Written JSON for ${outputPath}`))
    .catch(error => {
      throw error
    })
}

module.exports = writeJson
