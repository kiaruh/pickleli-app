import { useContext, useState} from "react"
import { CartData } from "../../context/CartContext"
import { Button } from '@mui/material'
import CheckoutItem from "./CheckoutItem"
import { firestore } from "../../firebase"
import firebase from 'firebase/app'
import CheckoutForm from "./CheckoutForm"

export const Checkout = () => {
    
    const {cart, clearCart, total} = useContext(CartData)
    
    const [id, setId] = useState('')
    const [ user, setUser ] = useState({name:'', email:'', phone:''})
    const [order, setOrder] = useState({})

    const checkout = () => {
        
        const orden = {
            date: firebase.firestore.Timestamp.now(),
            buyer: user,
            items: cart,
            total: total,
        }
        
        const db = firestore
        const coleccion = db.collection("ordenes")
        const query = coleccion.add({orden})

        query
            .then((resultado) => {
                setOrder(orden)
                clearCart()
                setId(resultado.id)
            })
            .catch((error)=>{
                console.log("ERRORRR: " + error)
            })
    }
    
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
            {order.items.map((e,i) => <p key={e+i}>Producto: {e.name} x {e.qty} subtotal: {e.price * e.qty} </p>)}
            <p>Total: ${order.total}</p>
            <p></p>
            
        </div>
    )}
    return (
        <div>
            <h1>Checkout</h1>
            <h1>{user.name} {user.phone} {user.email}</h1>
            <CheckoutForm user={user} setUser={setUser}/>
            {cart.map( (e,i)=> <CheckoutItem key={e+i} props={e}/>)}
            <h3>Total a pagar: ${total}</h3>
            <Button onClick={checkout}>Pagar</Button>
        </div>
    )
}
