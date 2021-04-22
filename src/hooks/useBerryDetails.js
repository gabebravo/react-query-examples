import { useQuery } from 'react-query'
import berryDetails from '../api/berryDetails'

const useBerryDetails = name =>
  useQuery(name, () => berryDetails(name), {
    staleTime: Infinity,
  })

export default useBerryDetails
