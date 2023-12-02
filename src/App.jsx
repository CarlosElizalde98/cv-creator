import { useState } from 'react'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="resume">
      <h1 className="page-title">Resume Builder</h1>
    </div>
  )
}

export default App
