import React, { useState } from 'react'
import arreglo from '../img/arregloDos.jpeg';
import { Card } from 'react-bootstrap';
import './Contador.css';

export default function Contador (){
    const [count, setCount] = useState(1);

    const sumar = () => {
        if (count < 5){
          setCount(count + 1);
        } else {
            alert('Cantidad maxima es 5 unidades de este producto')
        }
    }
    
    const restar = () => {
        if (count > 1){
            setCount(count - 1);
          } else {
              alert('Cantidad minima de este producto es 1')
          }
    }
    const comprar = () => {
        alert(`Va a comprar ${count} unidades de este producto`)
    }
  return (
    <div>
        <Card >
            <Card.Img className='tamano' src={arreglo} />
            <Card.Body>
                <Card.Title>Box Negro</Card.Title>
                <p>{count}</p>
        <button  className='btn btn-outline-primary'  onClick={sumar}>Agregar Articulo</button>
        <button  className='btn btn-outline-primary'  onClick={restar}>Sacar Articulo</button>
        <button  className='btn btn-outline-primary'  onClick={comprar}>Comprar</button>
    </Card.Body>
    </Card>
    </div>
  )
}
