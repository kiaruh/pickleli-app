import { useContext } from "react"
import { CartData } from "../../context/CartContext"

const CartItem = (props) =>{
    const { removeFromCart } = useContext(CartData)
    const producto = props.props

   console.log(props)
    return(
        <div>
            <h2>{producto.name}</h2>
            <img style={{width:'200px', height:'300px'}} src={producto.img} alt="" />
            <p>Precio: ${producto.price}</p>
            <p>Cantidad: {producto.qty}</p>
            <p>Subtotal: ${producto.price*producto.qty}</p>
            <button onClick={()=>removeFromCart(producto)}>Quitar</button>

        </div>

    )
}

export default CartItem