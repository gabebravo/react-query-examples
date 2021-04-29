import React from 'react'
import { useQuery, useQueryClient } from 'react-query'

export default function ReftchMultiInvalidAlt() {
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
        <button
          onClick={() =>
            queryCache.invalidateQueries(['random', 'A'], {
              refetchInactive: true,
            })
          }
        >
          Invalidate A
        </button>
        <button
          onClick={() =>
            queryCache.invalidateQueries(['random', 'B'], {
              refetchInactive: true,
            })
          }
        >
          Invalidate B
        </button>
        <button
          onClick={() =>
            queryCache.invalidateQueries(['random', 'C'], {
              refetchInactive: true,
            })
          }
        >
          Invalidate B
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {show ? 
          (
          <div>
            <RandomNumber subKey='A' /> 
            <RandomNumber subKey='B'/> 
            <RandomNumber subKey='C'/> 
          </div>
          )
        : null}
      </div>
    </div>
  )
}

// subKey is being passed as query key prefix, but the queryCache.invalidateQueries('random')
// will actually match and invalidate by the prefix (default behavior)
function RandomNumber({ subKey }) {
  const randomQuery = useQuery(
    ['random', subKey],
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