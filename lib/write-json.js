const { promisify } = require('util')
const mkdir = promisify(require('mkdirp'))
const writeFile = promisify(require('fs').writeFile)
const path = require('path')

module.exports = async (data, outputPath) => {
  const dir = path.join(__dirname, '../public/data/stations')
  const filePath = path.join(dir, 'index.json')

  mkdir(dir)
    .then(() => writeFile(filePath, JSON.stringify(data), 'utf-8'))
    .then(() => console.log(`Written json into ${outputPath} folder`))
    .catch(console.error)
}
