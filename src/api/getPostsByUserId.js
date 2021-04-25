import axios from 'axios'

const getPostsByUserId = async id => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    )

    return response.data
  } catch (error) {
    throw new Error('No Data')
  }
}

export default getPostsByUserId
