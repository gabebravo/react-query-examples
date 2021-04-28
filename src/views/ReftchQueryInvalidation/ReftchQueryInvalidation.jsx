import React from 'react'
import { useQueryClient } from 'react-query'
import { useGetPosts } from '../../hooks/usePosts'
import FeedbackMessage from '../../shared/FeedbackMessage'

export default function ReftchQueryInvalidation() {
    const queryCache = useQueryClient()
    // this query has uses the 'mPosts' key
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
  
  // BY INVALIDATING THE QUERY KEY (line 26), THAT WILL MANUALLY TRIGGER A REFETCH
    return isSuccess && (
      <div style={{ display: 'flex ', flexDirection: 'column', marginTop: 30 }}>
        <div style={{ display: 'flex', justifyContent: 'center', }}>
          <button onClick={() => queryCache.invalidateQueries('mPosts')}>Reftch</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ul>
            {data.map(post => {
              return (
                <li key={post.id}>
                  <span>
                    {post.title}
                  </span>
                </li>
              )
            })}
          </ul>
      </div>
    </div>
    )
  }