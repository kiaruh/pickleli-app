import { useContext, useState} from "react"
import { CartData } from "../../context/CartContext"
import CheckoutItem from "./CheckoutItem"

import CheckoutForm from "./CheckoutForm"

export const Checkout = () => {
    
    const {cart, total} = useContext(CartData)
    const [id, setId] = useState('')
    const [ user, setUser ] = useState({name:'', email:'', phone:''})
    const [order, setOrder] = useState({})

   if(cart.length === 0 && id === '') {
       return (
           <>
                <h1>El carrito esta vacio</h1>
           </>
       )
   }
   if (id) {
    return (
        <div>
            <p>Tu orden se proceso con exito!</p>
            <p><strong>Gracias por tu compra</strong></p>
            <p>ID Compra : #<strong>{id}</strong></p>
            <p>Nombre: {order.buyer.name}</p>
            <p>Email: {order.buyer.email}</p>
            <p>Telefono: {order.buyer.phone}</p>
            {order.items.map((e,i) => <p key={e+i}>Producto {i+1}: {e.name} x {e.qty} subtotal: ${e.price * e.qty} </p>)}
            <p>Total: ${order.total}</p>
            <p></p>
            
        </div>
    )}
    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm user={user} setOrder={setOrder} setId={setId} setUser={setUser}/>
            {cart.map( (e,i)=> <CheckoutItem key={e+i} props={e}/>)}
            <h3>Total a pagar: ${total}</h3>
            
        </div>
    )
}
