import useBerryList from '../../hooks/useBerryList'
import FeedbackMessage from '../../shared/FeedbackMessage'
import Header from './Header'
import { useHistory } from "react-router-dom";

export default function BerryList() {
  let history = useHistory();
  const { data, isLoading, isFetching, error } = useBerryList()

  if (error) {
    return <FeedbackMessage message='Woops... server error' />
  }

  if (isLoading) {
    return <FeedbackMessage message='Loading...' />
  }

  if (isFetching) {
    return <FeedbackMessage message='Data is updating...' />
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