export default function FeedbackMessage({ message = '' }) {
  return message ? (
    <div className="container">
    <div className="row">
      <div className="column column-40 column-offset-40">
        <h3 style={{ marginBottom: 20 }}>
          {message}
        </h3>
      </div>
    </div>
  </div>
  ) : null
}
