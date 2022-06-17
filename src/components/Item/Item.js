import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, price, img }) => {
    return (
        <div className='ProductCard'>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
            <Link className='BtnPrimary' to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item