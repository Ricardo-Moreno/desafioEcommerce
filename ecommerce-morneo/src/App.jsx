import { useState } from 'react'
import logo from './logo.svg'

import NavBar from './components/NavBar'
import Container from './components/Container'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from './components/Contador/Contador'

function App() {

  return (
    <div>
      <header>
      </header>
      <NavBar/>
      <Container titulo='Soy titulo' subtit='Soy subtitulo' />
      <Contador/>
    </div>
  )
}

export default App
