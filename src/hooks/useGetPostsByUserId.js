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

export default useGetPostsByUserId
