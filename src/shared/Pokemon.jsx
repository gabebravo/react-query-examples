export default function Pokemon({ imgSrc, weight = '' }) {
  return (
    <div className="row">
      <div className="column column-60 column-offset-10">
        <img src={imgSrc} />
        { weight && <span>{`weight: ${weight}`}</span> }
      </div>
    </div>
  )
}
