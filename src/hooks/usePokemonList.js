import { useQuery } from 'react-query'
import pokemonList from '../api/pokemonList'

const usePokemonList = () =>
  useQuery('pokemonList', pokemonList, {
    staleTime: Infinity,
  })

export default usePokemonList
