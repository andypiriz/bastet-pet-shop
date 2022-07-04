import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className="CartWidget">
            <img src="/images/cart.svg" alt='cart' className='CartImg' />
            {totalQuantity}
        </Link>
    );
}

export default CartWidget