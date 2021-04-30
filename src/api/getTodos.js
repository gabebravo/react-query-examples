import axios from 'axios'

const getTodos = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/todos`
    )
    return response.data
  } catch (error) {
    throw new Error('No Data')
  }
}

export default getTodos
