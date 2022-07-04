import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './CartItem.css'

const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className='CartItemContainer'>
            <div>
                <h3>
                    {name}
                </h3>
            </div>
            <div>
                <p>
                    Cantidad: {quantity}
                </p>
            </div>
            <div>
                <p>
                    Precio unitario: {price}
                </p>
            </div>
            <div>
                Subtotal: {price * quantity}
            </div>
            <div>
                <button onClick={() => handleRemove(id)}>x</button>
            </div>
        </div>
    )
}



export default CartItem