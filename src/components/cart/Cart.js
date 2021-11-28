import { useContext} from "react"
import { CartData } from "../../context/CartContext"
import CartItem from "./CartItem"
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Cart = () => {
    const {cart, total, calculateTotal} = useContext(CartData)

    calculateTotal(cart)

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
            <h2>Total: ${total}</h2>
            <NavLink to='/checkout'><Button variant='contained'>Finalizar Compra</Button></NavLink>
        </>
    )
}

export default Cart
