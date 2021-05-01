import React from 'react'
import { useGetTodos, usePostTodo, useDeleteTodo, usePutTodo } from '../../hooks/useTodoMutation'
import FeedbackMessage from '../../shared/FeedbackMessage'
import TodoForm from './TodoForm'

export default function TodoMutations() {
  const todoPostRq = usePostTodo()
  const todoDeleteRq = useDeleteTodo()
  const todoPutRq = usePutTodo()

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
            width: '22rem',
            justifyContent: 'space-between'
          }}
          key={todo.id}>
          <div>
            <span 
              style={{ color: '#9b4dca', cursor: 'pointer' }}
              onClick={() => console.log(todo.id)}
            >
              {todo.text}
            </span>
          </div>
          <div style={{ width: 30 }}>
            <span 
              onClick={() => todoPutRq.mutateAsync(todo)}
              style={{ color: todo.checked && 'green' }}>
                <i className="ri-checkbox-circle-fill"></i>
            </span>
            <span 
              onClick={() => todoDeleteRq.mutateAsync(todo.id)} 
              style={{ color: 'red', marginLeft: 10 }}>
                <i className="ri-close-circle-fill"></i>
            </span>
          </div>
        </li>
      ))
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <h3 style={{ textAlign: 'center', marginTop: '1rem' }}>Todo List</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ width: 300 }}>
          <ShowTodos />
        </ul>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TodoForm todoPostRq={todoPostRq} />
      </div>
    </div>
  )
}
