import useGetUserInfoByEmail from '../../hooks/useGetUserInfoByEmail'
import useGetPostsByUserId from '../../hooks/useGetPostsByUserId'
import FeedbackMessage from '../../shared/FeedbackMessage'

export default function UserInfo() {
  // user email:
  // https://jsonplaceholder.typicode.com/users?email=${email}
  
  // https://jsonplaceholder.typicode.com/posts?userId=${userId}

  const email = 'Sincere@april.biz'

  const userInfo = useGetUserInfoByEmail({ email }) // get the first returned query
  const postInfo = useGetPostsByUserId(userInfo?.data?.id, { // pass the id to the second
    enabled: Boolean(userInfo?.data?.id), // dont run unless this is true
  })

  const UserInfoStatus = () => <FeedbackMessage 
    message={ userInfo?.isLoading ? 'User Info Loading...' : `Welcome, ${userInfo?.data?.name}`} 
  />

  const PostTitles = ({ postInfo }) => (
    <ul>
      {
        postInfo.map( post => 
          <li key={post.id}><span>{post.title}</span></li>
        )
      }
    </ul>
  )

// IMP : isIdle is the loading state while the base query is loading, but the dependent query is waiting for its value
  const PostInfoStatus = () => postInfo.isIdle ? null : ( 
    <div className="container"> 
    <FeedbackMessage message={ postInfo?.isLoading ? 'Post Info Loading...' : `Post Count: ${postInfo?.data?.length}`}  />
      <div className="row">
        <div className="column column-40 column-offset-40">
          <div>
            { postInfo.status === 'success' && <PostTitles postInfo={postInfo?.data} /> } 
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <UserInfoStatus />
      <PostInfoStatus />
    </div>
  )
}
