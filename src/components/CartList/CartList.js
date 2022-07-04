import { useContext } from "react"
import CartContext from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"

const CartList = () => {
    const { cart, clearCart } = useContext(CartContext)

    return (
        <>
            <h1>
                CART
            </h1>
            <div>
                {cart.map(prod => < CartItem key={prod.id} {...prod} />)}

            </div>
        </>

    )
}

export default CartList