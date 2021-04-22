import usePokemonList from '../../hooks/usePokemonList'

export default function Header() {
  const { data, isLoading, isFetching, error } = usePokemonList()

  return !isLoading && (
    <div className="row" style={{ marginTop: 25 }}>
      <div className="column column-50 column-offset-25">
        <h3>You are looking at {data?.length} pokemon</h3>
      </div>
    </div>
  )
}
