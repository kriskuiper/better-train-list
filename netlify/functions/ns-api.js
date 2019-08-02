const axios = require('axios')
require('dotenv').config()

exports.handler = async (event, callback) => {
  try {
    const { endpoint } = event.body
    const response = await axios.get(`${process.env.NS_URL}/${endpoint}`, {
      'Some-Subscription-Key': process.env.NS_API_KEY
    })
    const data = await response.json()

    return callback(null, {
      statusCode: 200,
      body: data
    })
  } 
  catch(error) {
    return callback({
      statusCode: 400,
      body: `Something went wrong while fetching NS data: ${error}`
    })
  }
}
