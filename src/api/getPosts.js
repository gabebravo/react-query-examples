import axios from 'axios'

const getPosts = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return response.data
  } catch (error) {
    throw new Error('No Data')
  }
}

export default getPosts
