import { useParams } from "react-router-dom";
import Header from './Header'
import Pokemon from '../../shared/Pokemon'

export default function PokemonDetails() {
  let { name } = useParams();

  return name ? (
    <div className="container">
        <Header name={name} />
        <Pokemon pokemon={name} />
      </div>
  ) : null
}
