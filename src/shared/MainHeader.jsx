import { useHistory } from "react-router-dom";

export default function MainHeader() {
  let history = useHistory();

  return (
    <div className="row" style={{ marginTop: 25 }}>
      <div className="column column-10 column-offset-25">
        <span 
          style={{ color: '#9b4dca', cursor: 'pointer', fontSize: 25 }}
          onClick={() => history.push('/PokemonList')}
        >
          Pokemon List
        </span>
      </div>
      <div className="column column-10 column-offset-25">
      <span 
          style={{ color: '#9b4dca', cursor: 'pointer', fontSize: 25 }}
          onClick={() => history.push('/BerryList')}
        >
          Berry List
        </span>
      </div>
    </div>
  )
}
