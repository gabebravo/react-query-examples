import axios from 'axios'

const getPostByPostId = async postId => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    )

    return response.data
  } catch (error) {
    throw new Error('No Data')
  }
}

export default getPostByPostId
