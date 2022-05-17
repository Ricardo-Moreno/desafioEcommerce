import './Container.css';
import Formulario from './Formulario/Formulario';
import { useEffect, useState } from 'react'

function Container({titulo, subtit }){

 function saludar(){
        alert('Holaaaa')
    }

    return (
        <div>
            <h5 className="color">{titulo}</h5>
            <h6 className="color">{subtit}</h6>
            <Formulario relleno='rellena' saludar={saludar}/>
        </div>
    )
}

export default Container