import usePokemonDetails from '../hooks/usePokemonDetails'

// IMP : When the value changing the call is a prop, the behavior is diff. WORKS!
export default function Pokemon({ pokemon = '' }) {
  const { status, data, isLoading, isFetching, error } = usePokemonDetails(pokemon, { staleTime: 10000 })

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

  if (isFetching) {
    return <div>Data is updating...</div>
  }
  
  if (error) {
    return <div>Woops... server error</div>
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
