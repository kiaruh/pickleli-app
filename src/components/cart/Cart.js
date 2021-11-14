import { useContext } from "react"
import { CartData } from "../../context/CartContext"

const Cart = () => {
    const {cart} = useContext(CartData)
    console.log(cart)

    return (
        <div>
            <h1>CART</h1>
            {JSON.stringify(cart, null, 2)}
        </div>
    )
}

export default Cart
