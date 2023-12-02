import { useState } from 'react'
import  General  from './components/Generalform.jsx';
import Education from './components/Educationform.jsx';
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="resume">
      <h1 className="page-title">Resume Builder</h1>
      <General />
      <Education />
    </div>
  )
}

export default App
