import './Container.css';
import Formulario from './Formulario/Formulario';
import { useEffect, useState } from 'react'

const productos = [
    { id: "1", categoria: "Box", name: "Box negro", price: 20 },
    { id: "2", categoria: "Box boda", name: "Box azul", price: 50 },
    { id: "3", categoria: "Box cumpleaños", name: "Box verde", price: 40 },
    { id: "4", categoria: "Box bautizo", name: "Box rojo", price: 60 }
]

const promesa = new Promise ((resolve, reject)=>{
    
    setTimeout(()=> {
        resolve(productos);
    }, 3000);
});


function Container({titulo, subtit }){
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(()=> {
    promesa.then((resp) => setProductos(resp))
    .catch((err)=> console.log(err))
    .finally(()=> setLoading(false))
    }, [])

console.log(productos)


 function saludar(){
        alert('Holaaaa')
    }

    return (
        <div>
            <h5 className="color">{titulo}</h5>
            <h6 className="color">{subtit}</h6>
            <Formulario relleno='rellena' saludar={saludar}/>

            { loading ?
            <h2>Cargando...</h2>
            :
            productos.map((item)=> <div key={item.id} className='col-md-10 w-25'>
                                        <div className='card w-100 mt-5'>
                                        <div className='card-header'>
                                            {`${item.name} - ${item.categoria} `}
                                        </div>
                                        <div className='card-body'>
                                            {item.price}
                                        </div>
                                    </div>
                                </div>
)}
        </div>
    )
}

export default Container