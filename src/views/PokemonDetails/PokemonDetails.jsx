import { useParams } from "react-router-dom";
import usePokemonDetails from '../../hooks/usePokemonDetails.js'
import Header from './Header'

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
        <div className="row">
          <div className="column column-60 column-offset-10">
            <img src={data?.sprites?.other?.dream_world?.front_default} />
            <span>{`weight: ${data?.weight}`}</span>
          </div>
        </div>
      </div>
  ) : null
}
