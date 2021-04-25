import { useQuery } from 'react-query'
import getPostsByUserId from '../api/getPostsByUserId'

// NOTE : allows for config option overrides
const useGetPostsByUserId = (
  id,
  config = {
    staleTime: Infinity,
  }
) =>
  useQuery(['userInfo', id], () => getPostsByUserId(id), {
    ...config,
  })

// NOTE : initialData config object : the user would see this post list
// the query would still fetch, and then the posts would get updated with the actual data
/*
  useQuery(['userInfo', id], () => getPostsByUserId(id), {
    { initialData: [
      { id: 1, title: 'The art of cloud watching' },
      { id: 2, title: 'Dog voices, are they real?' },
      { id: 3, title: 'Global Warming... take it serious' },
      { id: 4, title: 'Tacos or Pizza, food review' },
      { id: 5, title: '10 Best Movies you\'ve never seen' },
    ], initialStale: true },
  })
*/
// initialStale: true >> IS IMP to get this to work

export default useGetPostsByUserId
