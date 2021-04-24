import { useQuery } from 'react-query'
import axios from 'axios'

const useCancelQuery = () =>
  useQuery('cancel', async () => {
    // Create a new CancelToken source for this request
    const source = axios.CancelToken.source()

    await new Promise(resolve => setTimeout(resolve, 1000))
    const promise = await axios.get('https://pokeapi.co/api/v2/pokemon', {
      // Pass the source token to your request
      cancelToken: source.token,
    })

    // Cancel the request if React Query calls the `promise.cancel` method
    promise.cancel = () => {
      source.cancel('Query was cancelled by React Query')
    }

    return promise.data.results
  })

export default useCancelQuery
