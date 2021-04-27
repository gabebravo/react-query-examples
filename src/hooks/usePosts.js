import { useQuery, useQueryClient } from 'react-query'
import getPosts from '../api/getPosts'
import getPostByPostId from '../api/getPostByPostId'

export const useGetPosts = (
  config = {
    staleTime: Infinity,
  }
) =>
  useQuery('mPosts', () => getPosts(), {
    ...config,
  })

/* IMPORTANT : queryClient example - allows you to read directly from the cache
  In this use-case, we show the post immedeatly from the cache, and then fetch after
  to update the post for the user. An updating indicator is displayed.
*/
export const useGetPostsById = postId => {
  const queryClient = useQueryClient()
  return useQuery(['mPost', postId], () => getPostByPostId(postId), {
    initialData: () =>
      queryClient.getQueryData('mPosts')?.find(post => post.id === postId),
    initialStale: true,
  })
}
