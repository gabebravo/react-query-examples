import axios from 'axios'

const berryList = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await axios.get('https://pokeapi.co/api/v2/berry')
    return response.data.results
  } catch (error) {
    throw new Error('No Data')
  }
}

export default berryList
