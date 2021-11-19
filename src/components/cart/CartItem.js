import { useContext } from "react"
import { CartData } from "../../context/CartContext"
import { Button } from '@mui/material'

const CartItem = (props) =>{
    const { removeFromCart } = useContext(CartData)
    const producto = props.props
    return(
        <div>
            <h2>{producto.name}</h2>
            <img style={{width:'200px', height:'300px'}} src={producto.img} alt="" />
            <p>Precio: ${producto.price}</p>
            <p>Cantidad: {producto.qty}</p>
            <p>Subtotal: ${producto.price*producto.qty}</p>
            <Button variant='contained' onClick={()=>removeFromCart(producto)}>Quitar</Button>

        </div>

    )
}

export default CartItem