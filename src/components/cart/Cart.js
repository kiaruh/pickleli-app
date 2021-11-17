import { useContext } from "react"
import { CartData } from "../../context/CartContext"
import CartItem from "./CartItem"
import { Button } from '@mui/material'

const Cart = () => {
    const {cart} = useContext(CartData)
    
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
            <Button variant='contained'>Finalizar Compra</Button>
        </>
    )
}

export default Cart
