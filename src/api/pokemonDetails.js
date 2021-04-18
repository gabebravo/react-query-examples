import axios from 'axios'

const pokemonDetails = async name => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    )
    return response.data
  } catch (error) {
    throw new Error('No Data')
  }
}

export { pokemonDetails as default }
