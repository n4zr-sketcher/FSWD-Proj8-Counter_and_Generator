import Counter from './components/Counter.jsx'
import RandomNumberGenerator from './components/RandomNumberGenerator.jsx'

function App() {
  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow"><span className="eyebrow-dot" /> YOUR EVERYDAY TOOLKIT</p>
        <h1>Small tools.<br /><span>Fresh starts.</span></h1>
        <p className="intro">
          A couple of handy little widgets to help you count things and leave a little to chance.
        </p>
      </header>

      <div className="tools-grid">
        <Counter />
        <RandomNumberGenerator />
      </div>

      <footer className="page-footer">A simple space to play with numbers <span>✳</span></footer>
    </main>
  )
}

export default App
