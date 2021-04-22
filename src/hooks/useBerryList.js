import { useQuery } from 'react-query'
import berryList from '../api/berryList'

const useBerryList = () =>
  useQuery('berryList', berryList, {
    staleTime: Infinity,
  })

export default useBerryList
