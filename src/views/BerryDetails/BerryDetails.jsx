import { useParams } from "react-router-dom";
import useBerryDetails from '../../hooks/useBerryDetails'
import FeedbackMessage from '../../shared/FeedbackMessage'
import Header from './Header'

export default function PokemonDetails() {
  let { name } = useParams();
  const { status, data, isLoading, isFetching, error } = useBerryDetails(name)

  if (error) {
    return <FeedbackMessage message='Woops... server error' />
  }

  if (isLoading) {
    return <FeedbackMessage message='Loading...' />
  }

  if (isFetching) {
    return <FeedbackMessage message='Data is updating...' />
  }

  return status === 'success' ? (
    <div className="container">
        <Header name={name} />
        <div className="row">
          <div className="column column-60 column-offset-10">
            <ul>
              <li>
                <span>{`Growth Time: ${data?.growth_time}`}</span>
              </li>
              <li>
                <span>{`Max Harvest: ${data?.max_harvest}`}</span>
              </li>
              <li>
                <span>{`Natural Gift Power: ${data?.natural_gift_power}`}</span>
              </li>
              <li>
                <span>{`Size: ${data?.size}`}</span>
              </li>
              <li>
                <span>{`Smoothness: ${data?.smoothness}`}</span>
              </li>
              <li>
                <span>{`Soil Dryness: ${data?.soil_dryness}`}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  ) : null
}
