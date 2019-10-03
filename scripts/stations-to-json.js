#!/usr/bin/env node

require('dotenv').config()

const fetch = require('node-fetch')
const writeJson = require('../lib/write-json')

const { NS_API_KEY, NS_STATIONS_URL } = process.env

stationsToJson()

async function stationsToJson() {
  console.log('Writing stations to json...')

  try {
    const response = await fetch(NS_STATIONS_URL, { headers: { 'Ocp-Apim-Subscription-Key': NS_API_KEY } })
    const { payload } = await response.json()

    const stationsData = payload.reduce((allStations, currentStation) => {
      if (currentStation.land === 'NL') {
        allStations[currentStation.namen.lang] = currentStation.code
      }

      return allStations
    }, {})
  
    return writeJson(stationsData, 'stations')
  }
  catch(error) {
    throw new Error(`Could not write stations to JSON with error: ${error}`)
  }
}
