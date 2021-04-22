import { useQuery } from 'react-query'
import pokemonDetails from '../api/pokemonDetails'

const usePokemonDetails = (
  name,
  config = {
    staleTime: Infinity,
  }
) => useQuery(name, () => pokemonDetails(name), { ...config })

export default usePokemonDetails
