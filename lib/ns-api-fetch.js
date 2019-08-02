const nsApiLambda = '../lambda/functions/ns-api.js'

export default async endpoint => {
  try {
    const response = await fetch(nsApiLambda, { endpoint: endpoint })
    return response
  }
  catch(error) {
    console.error(error)
    throw new Error('Sorry, we konden geen resultaten laden')
  }
}
