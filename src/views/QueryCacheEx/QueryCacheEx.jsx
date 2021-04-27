import React from 'react'
import { useGetPosts, useGetPostsById } from '../../hooks/usePosts'
import FeedbackMessage from '../../shared/FeedbackMessage'

export default function QueryCacheEx() {
  const [postId, setPostId] = React.useState(-1)

  function Posts() {
    const { data, isSuccess, isLoading, isFetching, error } = useGetPosts()

    if (error) {
      return <FeedbackMessage message='Woops... server error' />
    }
  
    if (isLoading) {
      return <FeedbackMessage message='Loading...' />
    }
  
    if (isFetching) {
      return <FeedbackMessage message='Data is updating...' />
    }
  
    return isSuccess && (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
        <ul>
          {data.map(post => {
            return (
              <li key={post.id}>
                <a onClick={() => setPostId(post.id)} href="#">
                  {post.title}
                </a>
              </li>
            )
          })}
        </ul>
    </div>
    )
  }

  function Post({ postId }) {
    const { data, isLoading, isFetching } = useGetPostsById(postId)
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a onClick={() => setPostId(-1)} href="#">
          Back
        </a>
        <br />
        <br />
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            {data.title}
            <br />
            <br />
            {isFetching ? 'Updating...' : null}
          </>
        )}
      </div>
    )
  }

  return (
    <div>
      {postId > -1 ? (
        <Post postId={postId} />
      ) : (
        <Posts />
      )}
    </div>
  )
}