import { render, screen, prettyDOM } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import usePokemonList from '../../hooks/usePokemonList'
import PokemonList from './PokemonList'

const wrapper = ({ children }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

test('usePokemonList returns data', async () => {
  const { result, waitFor } = renderHook(() => usePokemonList(), {
    wrapper,
  })

  await waitFor(() => result.current.isSuccess)
  expect(result.current.data).toHaveLength(20)
})

test('while loading', () => {
  jest.mock('../../hooks/usePokemonList', () => {
    return {
      __esModule: true,
      default: jest.fn(() => {}),
    }
  })

  render(<PokemonList />, { wrapper })
  const header = screen.getByRole('heading')
  expect(header).toHaveTextContent(/loading.../i)
})

// test('with an error', () => {
//   // it.todo('renders an error message')
// })

// test('with data', () => {
//   // it.todo('renders the list of pokemon')
// })
