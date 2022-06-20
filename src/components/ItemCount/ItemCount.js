import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [quantity, setQuatity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuatity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuatity(quantity - 1)
        }
    }

    return (
        <div className='CounterContainer'>
            <div className='CounterBtn'>
                <button className="BtnPrimary" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="BtnPrimary" onClick={increment}>+</button>
            </div>
            <div className='AddToCartBtn'>
                <button className="BtnPrimary" onClick={() => onAdd(quantity)}><img src="/images/add-to-cart.svg" alt='Agregar al carrito' title='Agregar al carrito' /></button>
            </div>
        </div>
    )


}


export default ItemCount