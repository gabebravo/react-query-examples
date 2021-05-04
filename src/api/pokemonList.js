import axios from 'axios'

const pokemonList = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 800))
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
    return response.data.results
  } catch (error) {
    throw new Error('No Data')
  }
}

export default pokemonList
