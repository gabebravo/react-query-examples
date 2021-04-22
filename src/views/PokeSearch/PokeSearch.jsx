import React, { useState, useEffect } from 'react'
import usePokemonDetails from '../../hooks/usePokemonDetails'
import Pokemon from '../../shared/Pokemon'

export default function PokeSearch() {
  const [name, setName] = useState('')
  const [pokemon, setPokemon] = useState('') 
  // for the case of passing the initial value to the useQuery url, DONT use null, use ''

  const { status, data, isLoading, isFetching, error, refetch } = usePokemonDetails(pokemon, {
    enabled: false,
  })

  useEffect(() => {
    if (pokemon) {
      refetch();
    }
  }, [pokemon, refetch])

  const handleSubmit = e => {
    e.preventDefault()
    setPokemon(name)
    setName('')
  }

  return (
    <div className="container" style={{ marginTop: 50 }}>
      <div className="row">
        <div className="column column-40 column-offset-40">
          <form onSubmit={handleSubmit}>
            <label>Find a Pokemon by Name</label>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button> Search</button>
          </form>
        </div>
      </div>
      {
        status === 'success' && <Pokemon imgSrc={data?.sprites?.other?.dream_world?.front_default} weight={data?.weight} />
      }
    </div>
  )
}
