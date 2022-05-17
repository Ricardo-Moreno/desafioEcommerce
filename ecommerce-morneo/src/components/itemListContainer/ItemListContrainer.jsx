import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import { getFetch } from ''



const ItemListContainer = ( { saludo='saludo' } ) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        if (id) {
        getFetch()
        .then(respuesta=> setProductos(respuesta.filter((prods)=> prods.categoria === id)))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))
        }else {
            getFetch()
            .then(respuesta=> setProductos(respuesta))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))
        }
    }, [id])

    function onAdd(cant) {
        console.log(cant)
    }
    
    console.log(productos)


    return (
        <div>
            {saludo} 
            { loading ? 
                <h2>Cargando...</h2> 
                : 
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <ItemList productos={productos}/>
                </div>
}
        </div>
            )
}

export default ItemListContainer