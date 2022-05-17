
const ItemDetail = ({producto}) => {
    return (
      <div className="row">
        <div className="col">
            <h1>{producto.name}</h1>
            <p>{producto.categoria}</p>
        </div>
      </div>
    )
  }
  
  export default ItemDetail
  