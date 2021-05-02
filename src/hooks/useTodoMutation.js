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

EX 3 - an optimistic update that will immediately write the data coming back from the api call
  to the cache, so the user won't see any lag on an expensive call, BUT - the query cache key 
  is still invalidated to force a refetch to the api to get the updated data from the POST call : 

const [savePost, savePostInfo] = useMutation(
    (values) =>
      axios.patch(`/api/posts/${values.id}`, values).then((res) => res.data),
    {
      onSuccess: (data, values) => {
        console.log(data)
        queryCache.setQueryData(['post', String(values.id)], data)
        queryCache.invalidateQueries(['post', String(values.id)])
      },
    }
  )

  NOTE - onSuccess has 2 args that can be used in its callback (arg1 = data, arg2 = values) :
    data: the data that is coming back immedeatly from the api call 
      * this data in the example is getting written to the query cache using setQueryData

    values: these are the arguments originally passed into the upper scope of the function 
      typically provided at the time its called. 
      * these values in the example have the id needed to be used in invalidateQueries, 
          so that the force refetch matches the original one
 
  IMP : Tanner reccomends still doing the invalidateQueries and forcing a refetch any time
    setQueryData is being used to optimistically update the UI
*/
