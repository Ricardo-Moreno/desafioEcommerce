import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
      </header>
      <NavBar/>
      <Container titulo='Soy titulo' subtit='Soy subtitulo' />
    </div>
  )
}

export default App
