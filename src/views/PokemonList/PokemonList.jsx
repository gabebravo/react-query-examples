import usePokemonList from '../../hooks/usePokemonList'
import FeedbackMessage from '../../shared/FeedbackMessage'
import Header from './Header'
import { useHistory } from "react-router-dom";

export default function PokemonList() {
  let history = useHistory();
  const { data, isLoading, isFetching, error } = usePokemonList()

  if (error) {
    return <FeedbackMessage message='Woops... server error' />
  }

  if (isLoading) {
    return <FeedbackMessage message='Loading...' />
  }

  if (isFetching) {
    return <FeedbackMessage message='Data is updating...' />
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
      <div className="container" data-testid="container">
        <Header />
        <div className="row">
          <div className="column column-60 column-offset-10">
            <h3 style={{ marginBottom: 20 }}>
              { isFetching ? 'Updating...' : 'Pokemon List' }
            </h3>
            <ul>
              <ShowPokemon />
            </ul>
          </div>
        </div>
      </div>
    )
  )
}