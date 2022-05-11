import React from 'react'

export default function Formulario({saludar, relleno='Que pasa perro'}) {
  return (
    <div>
        <form>
            <input type="text" placeholder={relleno} />
            <button className='btn btn-outline-primary' onClick={saludar}>Boton</button>
        </form>
    </div>
  )
}
