import React from 'react'
import { useQuery, useQueryClient } from 'react-query'

export default function ReftchInvactiveQuery() {
  const queryCache = useQueryClient()
  const [show, toggle] = React.useReducer(d => !d, true)
  return (
    <div style={{ display: 'flex ', flexDirection: 'column', marginTop: 30 }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{ marginRight: 20 }} onClick={toggle}>Toggle Random</button>
        <button
          onClick={() =>
            queryCache.invalidateQueries('random', {
              refetchInactive: true,
            })
          }
        >
          Invalidate Random Number
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {show ? <RandomNumber /> : null}
      </div>
    </div>
  )
}

function RandomNumber() {
  const randomQuery = useQuery(
    'random',
    async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      return Math.floor((Math.random() * 999) + 1)
    },
    {
      staleTime: Infinity,
    }
  )

  return (
    <div>
      <h1>Random Number {randomQuery.isFetching ? '...' : null}</h1>
      <h2>
        {randomQuery.isLoading
          ? 'Loading random number...'
          : randomQuery.data}
      </h2>
    </div>
  )
}