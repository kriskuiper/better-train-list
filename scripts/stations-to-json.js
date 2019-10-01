#!/usr/bin/env node

require('dotenv').config()

const fetch = require('node-fetch')
const writeJson = require('../lib/write-json')

const { NS_API_KEY, NS_STATIONS_URL } = process.env

stationsToJson()

function stationsToJson() {
  console.log('Writing stations to json...')

  fetch(NS_STATIONS_URL, { headers: { 'Ocp-Apim-Subscription-Key': NS_API_KEY } })
    .then(response => response.json())
    .then(stations => writeJson(stations, 'stations'))
    .catch(error => {
      throw error
    })
}

