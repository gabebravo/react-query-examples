import { useQuery } from 'react-query'
import pokemonDetails from '../api/pokemonDetails'
import { useParams } from "react-router-dom";

export default function PokemonDetails() {
  let { name } = useParams();
  const { status, data, isLoading, isFetching, error } = useQuery(
    name,
    () => pokemonDetails(name),
    {
      staleTime: Infinity,
    }
  )
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Woops... server error</div>
  }

  console.log(`data`, data)
  return status === 'success' ? (
    <div className="container">
        <div className="row">
          <div className="column">
            <h3>{data?.species?.name}</h3>
            <img src={data?.sprites?.other?.dream_world?.front_default} />
            <span>{`weight: ${data?.weight}`}</span>
          </div>
        </div>
      </div>
  ) : null
}
