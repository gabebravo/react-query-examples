import { useQuery, useMutation, queryCache } from 'react-query'
import getTodos from '../api/getTodos'

export const useGetTodos = () => useQuery('todos', getTodos, {})
