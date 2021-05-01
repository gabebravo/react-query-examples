import React from 'react'
import FeedbackMessage from '../../shared/FeedbackMessage'

export default function TodoForm({
  initialValues = '', 
  todoPostRq
}) {
  const [todo, setTodo] = React.useState('')
  const { isSuccess, isLoading, error } = todoPostRq

  const handleSubmit = (e) => {
    e.preventDefault()
    todoPostRq.mutateAsync(todo)
    setTodo('')
  }

  const ShowHeaderMessage = () => {
    if (error) {
      return <FeedbackMessage message='Woops... server error' />
    }
  
    if (isLoading) {
      return <FeedbackMessage message='Saving Todo...' />
    }
    if(isSuccess) {
      return <FeedbackMessage message='Todo Saved' />
    }
    return null
  }

  return (
    <div style={{ width: 300 }}>
      <ShowHeaderMessage />
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Text</label>
        <div>
          <input
            type="text"
            name="title"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}