import { useQuery } from 'react-query'
import pokemonDetails from '../api/pokemonDetails'

const usePokemonDetails = name =>
  useQuery(name, () => pokemonDetails(name), {
    staleTime: Infinity,
  })

export default usePokemonDetails
