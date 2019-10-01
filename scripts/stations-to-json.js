#!/usr/bin/env node

require('dotenv').config()

const { promisify } = require('util')
const path = require('path')
const fetch = require('node-fetch')
const mkdir = promisify(require('mkdirp'))
const writeFile = promisify(require('fs').writeFile)

const { NS_API_KEY, NS_STATIONS_URL } = process.env

stationsToJson()

function stationsToJson() {
  console.log('Writing stations to json...')

  fetch(NS_STATIONS_URL, { headers: { 'Ocp-Apim-Subscription-Key': NS_API_KEY } })
    .then(response => response.json())
    .then(stations => toJSON(stations, 'stations'))
    .catch(error => {
      throw error
    })
}

function toJSON(data, outputPath) {
  const directory = path.join(__dirname, '../public/data/', outputPath)
  const fileName = path.join(directory, 'index.json')

  mkdir(directory)
    .then(writeFile(fileName, JSON.stringify(data), 'utf-8'))
    .then(console.log('Written JSON for stations'))
    .catch(console.error)
}

