import usePokemonList from '../../hooks/usePokemonList'
import Header from './Header'
import { useHistory } from "react-router-dom";

export default function PokemonList() {
  let history = useHistory();
  const { data, isLoading, isFetching, error } = usePokemonList()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Woops... server error</div>
  }

  const ShowPokemon = () =>
    data.map(pk => (
      <li key={pk.name}>
        <span 
          style={{ color: '#9b4dca', cursor: 'pointer' }}
          onClick={() => history.push(`/PokemonDetails/${pk.name}`)}
        >
          {pk.name}
        </span>
      </li>
    ))

  return (
    data.length && (
      <div className="container">
        <Header length={data?.length} />
        <div className="row">
          <div className="column column-60 column-offset-10">
            <h3>Pokemon List</h3>
            {isFetching ? (
              <div style={{ marginBottom: 20 }}>Updating...</div>
            ) : null}
            <ul>
              <ShowPokemon />
            </ul>
          </div>
        </div>
      </div>
    )
  )
}