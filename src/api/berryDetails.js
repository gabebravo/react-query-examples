import axios from 'axios'

const berryDetails = async name => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await axios.get(
      `https://pokeapi.co/api/v2/berry/${name}/`
    )
    return response.data
  } catch (error) {
    throw new Error('No Data')
  }
}

export default berryDetails
