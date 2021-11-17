import { useContext } from "react"
import { CartData } from "../../context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {
    const {cart} = useContext(CartData)
   console.log(cart)
    
   if(cart.length === 0) {
       return (
           <>
                <h1>El carrito esta vacio</h1>
           </>
       )
   }

    return (
        <>
            <h1>CART</h1>
            {cart.map( (e,i)=> <CartItem key={e+i} props={e}/>)}
            <h2>Total: ${}</h2>
        </>
    )
}

export default Cart
