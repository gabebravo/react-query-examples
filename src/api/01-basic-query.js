import axios from 'axios'

const basicQuery = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
    return response.data.results
  } catch (error) {
    throw new Error('No Data')
  }
}

export { basicQuery as default }
