import { useParams } from "react-router-dom";
import useBerryDetails from '../../hooks/useBerryDetails'
import Header from './Header'

export default function PokemonDetails() {
  let { name } = useParams();
  const { status, data, isLoading, isFetching, error } = useBerryDetails(name)

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
