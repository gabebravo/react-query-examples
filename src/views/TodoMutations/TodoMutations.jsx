import React from 'react'
import { useGetTodos } from '../../hooks/useTodoMutation'
import FeedbackMessage from '../../shared/FeedbackMessage'

export default function TodoMutations() {

  const ShowTodos = () => {
    const { data, isLoading, isSuccess } = useGetTodos()
  
    if (isLoading) {
      return <FeedbackMessage message='Loading...' />
    }

    if(isSuccess) {
      return data.map(todo => (
        <li 
          style={{
            fontSize: '2rem',
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '22rem',
          }}
          key={todo.id}>
          <span 
            style={{ color: '#9b4dca', cursor: 'pointer' }}
            onClick={() => console.log(todo.id)}
          >
            {todo.text}
          </span>
          <span style={{ color: todo.checked && 'green' }}><i class="ri-checkbox-circle-fill"></i></span>
          <span style={{ color: 'red' }}><i class="ri-close-circle-fill"></i></span>
        </li>
      ))
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <h3 style={{ textAlign: 'center', marginTop: '1rem' }}>Todo List</h3>
      <ul style={{ display: 'flex', justifyContent: 'center' }}>
        <ShowTodos />
      </ul>
    </div>
  )
}
