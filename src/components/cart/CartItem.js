// import { useContext } from "react"
// import { CartData } from "../../context/CartContext"

const CartItem = (props) =>{
    const producto = props.props
    // const {subtotal, setSubtotal} = useContext(CartData)

    // setSubtotal([...subtotal, producto.price*producto.qty])
   console.log(props)
    return(
        <div>
            <h2>{producto.name}</h2>
            <img style={{width:'200px', height:'300px'}} src={producto.img} alt="" />
            <p>Precio: ${producto.price}</p>
            <p>Cantidad: {producto.qty}</p>
            <p>Subtotal: ${producto.price*producto.qty}</p>
            <button onClick>Quitar</button>

        </div>

    )
}

export default CartItem