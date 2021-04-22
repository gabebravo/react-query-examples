import useBerryList from '../../hooks/useBerryList'
import Header from './Header'
import { useHistory } from "react-router-dom";

export default function BerryList() {
  let history = useHistory();
  const { data, isLoading, isFetching, error } = useBerryList()

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

  const ShowBerries = () =>
    data.map(br => (
      <li key={br.name}>
        <span 
          style={{ color: '#9b4dca', cursor: 'pointer' }}
          onClick={() => history.push(`/BerryDetails/${br.name}`)}
        >
          {br.name}
        </span>
      </li>
    ))

  return (
    data.length && (
      <div className="container">
        <Header />
        <div className="row">
          <div className="column column-60 column-offset-10">
            <h3 style={{ marginBottom: 20 }}>
              { isFetching ? 'Updating...' : 'Berry List' }
            </h3>
            <ul>
              <ShowBerries />
            </ul>
          </div>
        </div>
      </div>
    )
  )
}