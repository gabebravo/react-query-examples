import usePokemonDetails from '../hooks/usePokemonDetails'
import FeedbackMessage from './FeedbackMessage'

// IMP : When the value changing the call is a prop, the behavior is diff. WORKS!
export default function Pokemon({ pokemon = '' }) {
  const { status, data, isLoading, isFetching, error } = usePokemonDetails(pokemon, { 
    retry: 2, staleTime: 10000, enabled: pokemon.length > 0 // is only enlabled if a pokemon value is present
  })

  if (error) {
    return <FeedbackMessage message='Woops... server error' />
  }

  if (isLoading) {
    return <FeedbackMessage message='Loading...' />
  }

  if (isFetching) {
    return <FeedbackMessage message='Data is updating...' />
  }

  return status === 'success' && (
    <div className="row">
      <div className="column column-60 column-offset-10">
        <img src={data?.sprites?.other?.dream_world?.front_default} />
        <span>{`weight: ${data?.weight}`}</span>
      </div>
    </div>
  )
}
