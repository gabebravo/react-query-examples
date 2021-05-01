import { useQuery, useMutation, queryCache } from 'react-query'
import { getTodos, postTodo } from '../api/todos'

export const useGetTodos = () => useQuery('todos', getTodos, {})

export const usePostTodo = () => useMutation(todo => postTodo(todo))
