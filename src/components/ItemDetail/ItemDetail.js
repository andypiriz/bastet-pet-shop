import './ItemDetail.css'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, img, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        addItem({ id, name, price, quantity })
        setQuantityAdded(quantity)
    }

    return (
        <article className="ProductDetail">
            <div className="Header">
                <picture>
                    <img src={img} alt={name} className="ItemImg" />
                </picture>
            </div>
            <div>
                <div>
                    <h2>
                        {name}
                    </h2>
                    <p>
                        Descripción: {description}
                    </p>
                    <p>
                        Precio: ${price}
                    </p>
                </div>
                <div>
                    {quantityAdded === 0
                        ? <ItemCount stock={stock} onAdd={handleOnAdd} />
                        : <Link className='BtnPrimary' to='/cart'>Finalizar compra</Link>
                    }
                </div>
            </div>
        </article>
    )
}

export default ItemDetail