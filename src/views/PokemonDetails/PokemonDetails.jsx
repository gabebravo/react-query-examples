import { useParams } from "react-router-dom";
import usePokemonDetails from '../../hooks/usePokemonDetails.js'
import Header from './Header'
import Pokemon from '../../shared/Pokemon'

export default function PokemonDetails() {
  let { name } = useParams();
  const { status, data, isLoading, isFetching, error } = usePokemonDetails(name)

  if (isLoading) {
    return <div className="container">
    <div className="row">
      <div className="column column-40 column-offset-40">
        <h3 style={{ marginBottom: 20 }}>
          Loading...
        </h3>
      </div>
    </div>
  </div>
  }
  
  if (error) {
    return <div>Woops... server error</div>
  }

  return status === 'success' ? (
    <div className="container">
        <Header name={name} />
        <Pokemon imgSrc={data?.sprites?.other?.dream_world?.front_default} weight={data?.weight} />
      </div>
  ) : null
}
