import axios from 'axios'

export const getTodos = async () => {
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

export const postTodo = async todo => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await axios.post(
      todo.toLowerCase() !== 'path error'
        ? `${process.env.REACT_APP_BASE_URL}/todos`
        : `${process.env.REACT_APP_BASE_URL}/path-error`, // this will cause an error
      {
        text: todo,
      }
    )
    return response.data
  } catch (error) {
    throw error.message
  }
}

export const deleteTodo = async id => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/todos/${id}`
    )
    return response.data
  } catch (error) {
    throw new Error('No Data')
  }
}

export const putTodo = async todo => {
  try {
    todo.checked = !todo.checked
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/todos/${todo.id}`,
      todo
    )
    return response.data
  } catch (error) {
    throw new Error('No Data')
  }
}
