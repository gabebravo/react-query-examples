import { useQuery, useMutation, queryCache } from 'react-query'
import { getTodos, postTodo, deleteTodo } from '../api/todos'

export const useGetTodos = () => useQuery('todos', getTodos, {})

export const usePostTodo = () => useMutation(todo => postTodo(todo))

export const useDeleteTodo = () => useMutation(id => deleteTodo(id))
