const productos = [
    { id: "1", categoria: "Box", name: "Box negro", price: 20 },
    { id: "2", categoria: "Box boda", name: "Box azul", price: 50 },
    { id: "3", categoria: "Box cumpleaños", name: "Box verde", price: 40 },
    { id: "4", categoria: "Box bautizo", name: "Box rojo", price: 60 }
]

export const getFetch = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const query = id ? productos.find(producto => producto.id === id ) : productos
            resolve( query )
        }, 2000)
})
}


