import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getTodos, postTodo, deleteTodo, putTodo } from '../api/todos'

/* NOTE : Alt version - previous version of useGetTodos :
    -- export const useGetTodos = () => useQuery('todos', getTodos, {}) --
      This version would not require the onSuccess blocks in the config
      because a blank config will immediately invalidate the cache key
*/
export const useGetTodos = () =>
  useQuery('todos', getTodos, {
    staleTime: Infinity,
  })

export const usePostTodo = () => {
  const queryClient = useQueryClient()
  return useMutation(todo => postTodo(todo), {
    onSettled: () => {
      // will run everytime whether error or success
      queryClient.invalidateQueries('todos')
    },
    onError: error => {
      // will run on error
      alert(error)
    },
  })
}

export const useDeleteTodo = () => {
  const queryClient = useQueryClient()
  return useMutation(id => deleteTodo(id), {
    onSuccess: () => {
      // will run on success
      queryClient.invalidateQueries('todos')
    },
  })
}

export const usePutTodo = () => {
  const queryClient = useQueryClient()
  return useMutation(todo => putTodo(todo), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    },
  })
}

/* IMPORTANT : useMutation has a 2nd arg that can be used to config what to do after the mutation :
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

EX 1 - add Todo and then invalidate the 'todos' query key to force a refetch: 

  export const usePostTodo = () => {
    const queryClient = useQueryClient()
    return useMutation(todo => postTodo(todo), {
      onSuccess: () => {
        queryClient.invalidateQueries('todos')
      },
    })
  }

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

EX 2 - error handling after handled/thrown from the axios api call : 

  export const usePostTodo = () => {
    const queryClient = useQueryClient()
    return useMutation(todo => postTodo(todo), {
      onSuccess: () => {
        queryClient.invalidateQueries('todos')
      },
      onError: error => {
        alert(error)
      },
    })
  }

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

EX 3 - onSettled will run all the time and either return success or error : 

  export const usePostTodo = () => {
    const queryClient = useQueryClient()
    return useMutation(todo => postTodo(todo), {
      onSuccess: () => {
        queryClient.invalidateQueries('todos')
      },
      onError: error => {
        alert(error)
      },
      onSettled: ({ data, error }) => {
        console.log(data)
        console.log(error)
      },
    })
  }

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
*/
