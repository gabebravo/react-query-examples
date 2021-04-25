import { useQuery } from 'react-query'
import getUserInfoByEmail from '../api/getUserInfoByEmail'

const useGetUserInfoByEmail = ({ email }) =>
  useQuery(['userInfo', email], () => getUserInfoByEmail(email), {
    staleTime: Infinity,
  })

export default useGetUserInfoByEmail
