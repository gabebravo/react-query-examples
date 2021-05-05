import { render, screen, prettyDOM } from '@testing-library/react'
import { wrapper } from '../../utils/test'
import usePokemonList from '../../hooks/usePokemonList'
import PokemonList from './PokemonList'

jest.mock('../../hooks/usePokemonList', () => {
  return {
    __esModule: true,
    default: jest.fn(() => {}),
  }
})

test('while loading', () => {
  usePokemonList.mockImplementation(() => ({
    isLoading: true,
  }))
  render(<PokemonList />, { wrapper })
  const header = screen.getByRole('heading')
  expect(header).toHaveTextContent(/Loading.../i)
})

test('with error', () => {
  usePokemonList.mockImplementation(() => ({
    error: { message: 'You have an error' },
  }))
  render(<PokemonList />, { wrapper })
  const header = screen.getByRole('heading')
  expect(header).toHaveTextContent(/Woops... server error/i)
})

test('with data', () => {
  usePokemonList.mockImplementation(() => ({
    data: [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
    ],
  }))
  render(<PokemonList />, { wrapper })
  const container = screen.getByTestId('container')
  // console.log(prettyDOM(container))
  expect(container).toBeInTheDocument()
})
