import { useState } from 'react'
import  General  from './components/Generalform.jsx';
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="resume">
      <h1 className="page-title">Resume Builder</h1>
      <General />
    </div>
  )
}

export default App
