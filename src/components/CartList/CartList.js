import { useContext } from "react"
import CartContext from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import '../../App.css';
import '../CartList/CartList.css'

const CartList = () => {
    const { cart } = useContext(CartContext)

    return (
        <div className="CartContainer">
            <h1>
                Tu carrito
            </h1>
            <div>
                {cart.map(prod => < CartItem key={prod.id} {...prod} />)}
            </div>
            <button className="BtnPrimary">Finalizar compra</button>
        </div>

    )
}

export default CartList