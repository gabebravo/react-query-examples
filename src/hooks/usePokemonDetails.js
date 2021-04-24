import { useQuery } from 'react-query'
import pokemonDetails from '../api/pokemonDetails'

// NOTE : allows for config option overrides
const usePokemonDetails = (
  name,
  config = {
    staleTime: Infinity,
  } // ['pokemon', name] == multi-part query key for organization == ['pokemon', 'pikachu']
) => useQuery(['pokemon', name], () => pokemonDetails(name), { ...config })

export default usePokemonDetails
