import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
      </header>
      <NavBar/>
    </div>
  )
}

export default App
