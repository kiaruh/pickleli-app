import { useContext} from "react"
import { CartData } from "../../context/CartContext"
import CartItem from "./CartItem"
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import Typography from '@mui/material/Typography';

const Cart = () => {
    const {cart, total, calculateTotal} = useContext(CartData)

    calculateTotal(cart)

    if(cart.length === 0) {
       return (
           <>
                <Typography variant='h4'>El carrito esta vacio</Typography> 
           </>
       )
    }

    return (
        <>
            <Typography variant='h5'>Carrito: </Typography>
            {cart.map( (e,i)=> <CartItem key={e+i} props={e}/>)}
            <Typography variant='h5'>Total: ${total}</Typography>
            <NavLink to='/checkout'><Button variant='contained'>Finalizar Compra</Button></NavLink>
        </>
    )
}

export default Cart
