import { Link } from 'react-router-dom'

const Item = ({prod}) => {
  return (
    <div className='col-md-10 w-25'>
    <div className="card w-100 mt-5" >
    <div className="card-header">
    {`${prod.name} - ${prod.categoria}`}
    </div>
    <div className="card-body">
    {prod.price}
    </div>
    <div className="card-footer">
    <Link to={`/detalle/${prod.id}`}>
        <button className="btn btn-outline-primary btn-block">detalle del producto</button>
    </Link>
</div>
</div>
</div>
)
}

export default Item


