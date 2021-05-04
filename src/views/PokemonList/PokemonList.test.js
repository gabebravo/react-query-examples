import { renderHook } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import usePokemonList from '../../hooks/usePokemonList'

const wrapper = ({ children }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

test('Render PokemonList RQ', async () => {
  const { result, waitFor } = renderHook(() => usePokemonList(), {
    wrapper,
  })

  await waitFor(() => result.current.isSuccess)
  console.log(`result.current.data`, result.current.data)
  expect(result.current.data).toHaveLength(20)
})
