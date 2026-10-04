import { useState } from 'react'

function RandomNumberGenerator() {
  const [number, setNumber] = useState(null)

  function generateNumber() {
    setNumber(Math.floor(Math.random() * 100) + 1)
  }

  return (
    <section className="tool-card random-card" aria-labelledby="random-title">
      <div className="card-heading">
        <span className="card-icon random-icon" aria-hidden="true">02</span>
        <div>
          <p className="card-label">A LITTLE SURPRISE</p>
          <h2 id="random-title">Random number</h2>
        </div>
      </div>

      <div className="random-result" aria-live="polite">
        {number === null ? (
          <p className="empty-message">No number generated yet</p>
        ) : (
          <p className="random-number">{number}</p>
        )}
      </div>
      <p className="random-hint">Your next number is somewhere between 1 and 100.</p>

      <button className="button button-generate" onClick={generateNumber}>
        Generate random number <span aria-hidden="true">↗</span>
      </button>
    </section>
  )
}

export default RandomNumberGenerator
