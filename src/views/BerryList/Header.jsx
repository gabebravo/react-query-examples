import useBerryList from '../../hooks/useBerryList'

export default function Header() {
  const { data, isLoading, isFetching, error } = useBerryList()

  return (
    !isLoading && (
      <div className="row" style={{ marginTop: 25 }}>
        <div className="column column-50 column-offset-25">
          <h3>You are looking at {data?.length} berries</h3>
        </div>
      </div>
    )
  )
}
