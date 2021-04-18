import { useQuery } from 'react-query'
import basicQuery from './api/01-basic-query'

function App() {
  const { data, isLoading, error } = useQuery('pokemon', basicQuery)
  console.log(`data`, data)
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Woops... server error</div>
  }

  const ShowPokemon = () =>
    data.map(pk => (
      <li key={pk.name}>
        <a href={pk.url} target="_blank">
          {pk.name}
        </a>
      </li>
    ))

  return (
    data.length && (
      <div class="container">
        <div class="row">
          <div class="column">
            <h3>Pokemon List</h3>
            <ul>
              <ShowPokemon />
            </ul>
          </div>
        </div>
      </div>
    )
  )
}

export default App
