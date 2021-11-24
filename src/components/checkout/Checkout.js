import { useContext, useState, useEffect } from "react"
import { CartData } from "../../context/CartContext"
import { Button } from '@mui/material'
import CheckoutItem from "./CheckoutItem"
import { firestore } from "../../firebase"



export const Checkout = () => {
    const {cart} = useContext(CartData)
    const [total, setTotal] = useState(0)
    const [id, setId] = useState('')

    const calculateTotal = (cart) => {
        let sum = 0
        cart.forEach(item => {
            sum += item.price * item.qty
        })
        setTotal(sum)
    }

    const checkout = () => {
        const user = {
            name: "Jose",
            email: "jose@jose.com",
            phone: "123456789",
        }
        const orden = {
            buyer: user,
            items: cart,
            sum: total,
        }

        console.log(orden)

        const db = firestore
        const coleccion = db.collection("ordenes")
        const query = coleccion.add(orden)

        query
            .then((resultado) => {
                setId(resultado.id)
            })
            .catch((error)=>{
                console.log("ERRORRR: " + error)
            })
    }
    
    useEffect(() => {calculateTotal(cart)}, [cart])
    

   if(cart.length === 0) {
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
            <p>Numero de Compra : #<strong>{id}</strong></p>
        </div>
    )}
    return (
        <div>
            <h1>Checkout</h1>
            {cart.map( (e,i)=> <CheckoutItem key={e+i} props={e}/>)}
            <h3>Total a pagar: ${total}</h3>
            <Button onClick={checkout}>Pagar</Button>
        </div>
    )
}
