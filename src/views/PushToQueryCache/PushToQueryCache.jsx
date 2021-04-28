import React from 'react'
import axios from 'axios'
import { useQuery, useQueryClient } from 'react-query'
import FeedbackMessage from '../../shared/FeedbackMessage'

export default function PushToQueryCache() {
  const [postId, setPostId] = React.useState(-1)

  function Posts() {
    const queryCache = useQueryClient()
    const { data, isSuccess, isLoading, isFetching, error } = useQuery('pqcPosts', 
    async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const posts = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )

// by default, when you use setQueryData, the data becomes immedeatly stale, so it will fetch again and update
      posts?.data.forEach( post => { 
        queryCache.setQueryData(['pqcPost', post.id], post)
      })

      return posts?.data
    }
    , {})

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
    const { data, isLoading, isFetching } =  useQuery(['pqcPost', postId], 
    async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      )
  
      return response.data
    }
    , {})
  
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