import { Card } from '@mui/material'


const CheckoutItem = (props) =>{
    
    const producto = props.props
    return(
        <Card>
            <h3>{producto.name}</h3>
            <img style={{width:'100px', height:'150px'}} src={producto.img} alt="" />
            <p>Precio: ${producto.price}</p>
            <p>Cantidad: {producto.qty}</p>
            <p>Subtotal: ${producto.price*producto.qty}</p>
        </Card>

    )
}

export default CheckoutItem