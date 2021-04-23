import React, { useState } from 'react'
import Pokemon from '../../shared/Pokemon'

export default function PokeSearch() {
  const [name, setName] = useState('')
  const [pokemon, setPokemon] = useState('') 
  // for the case of passing the initial value to the useQuery url, DONT use null, use ''

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
        pokemon && <Pokemon pokemon={pokemon} />
      }
    </div>
  )
}
