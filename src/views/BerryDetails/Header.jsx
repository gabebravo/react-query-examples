import useBerryDetails from '../../hooks/useBerryDetails'

export default function Header({ name = '' }) {
  const { data, isLoading, isFetching, error } = useBerryDetails(name)

  return name && !isLoading && (
    <div className="row" style={{ marginTop: 25 }}>
      <div className="column column-50 column-offset-25">
        <h3>You are looking at {data?.name} berry</h3>
      </div>
    </div>
  )
}
