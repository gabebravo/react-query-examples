import axios from 'axios'

const getUserInfoByEmail = async email => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users?email=${email}`
    )
    return response.data[0]
  } catch (error) {
    throw new Error('No Data')
  }
}

export default getUserInfoByEmail
