import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config()

const { NS_BASEURL, NS_API_KEY } = process.env

exports.handler = async (event) => {
  const { station } = JSON.parse(event.body)

  if (event.httpMethod !== 'POST') {
    return { statusCode: 200, body: 'Only POST method is allowed' }
  }

  return fetch(`${NS_BASEURL}?station=${station}`, { headers: { 'Ocp-Apim-Subscription-Key': NS_API_KEY } })
    .then(res => res.json())
    .then(data => ({
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
      body: JSON.stringify(data)
    }))
    .catch(error => ({
      statusCode: 422,
      body: String(error)
    }))
}
