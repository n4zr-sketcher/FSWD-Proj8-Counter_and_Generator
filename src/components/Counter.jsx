import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function decreaseCount() {
    setCount((currentCount) => Math.max(0, currentCount - 1))
  }

  return (
    <section className="tool-card counter-card" aria-labelledby="counter-title">
      <div className="card-heading">
        <span className="card-icon counter-icon" aria-hidden="true">01</span>
        <div>
          <p className="card-label">KEEP IT MOVING</p>
          <h2 id="counter-title">Counter</h2>
        </div>
      </div>

      <p className="counter-number" aria-live="polite">{count}</p>
      <p className="counter-message" aria-live="polite">
        {count === 0 ? 'Minimum limit reached' : 'Nice, you’re making progress!'}
      </p>

      <div className="button-row">
        <button className="button button-light" onClick={decreaseCount}>− Decrease</button>
        <button className="button button-primary" onClick={() => setCount(count + 1)}>
          + Increment
        </button>
      </div>
      <button className="reset-button" onClick={() => setCount(0)}>Reset counter</button>
    </section>
  )
}

export default Counter
