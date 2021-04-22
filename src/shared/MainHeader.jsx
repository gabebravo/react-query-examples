import { useHistory } from "react-router-dom";

export default function MainHeader() {
  let history = useHistory();

  return (
    <div className="row" style={{ marginTop: 25 }}>
      <div className="column column-25 column-offset-10">
        <span 
          style={{ color: '#9b4dca', cursor: 'pointer', fontSize: 25 }}
          onClick={() => history.push('/PokeSearch')}
        >
          PokeSearch
        </span>
      </div>
      <div className="column column-25 column-offset-10">
        <span 
          style={{ color: '#9b4dca', cursor: 'pointer', fontSize: 25 }}
          onClick={() => history.push('/PokemonList')}
        >
          Pokemon List
        </span>
      </div>
      <div className="column column-25 column-offset-10">
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
