import { firestore } from "../../firebase"
import firebase from 'firebase/app'
import { useContext} from "react"
import { Button } from '@mui/material'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { CartData } from "../../context/CartContext"

  const schema = yup.object().shape({
    name: yup.string().required('El nombre es requerido'),
    email: yup.string().email('Tiene que ser formato email').required('El email es requerido'),
    phone: yup.string().required('El numero es requerido'),
  })

function CheckoutForm({setUser, user, setOrder, setId}){
    
    const {cart, clearCart, total} = useContext(CartData)
    
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
      })

    const handleInputChange = (event) => {
        setUser({...user, [event.target.name]:event.target.value})
    }

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
    const onSubmit = (data) => {
        checkout()
    }
  
    return(
        <form onSubmit={handleSubmit(onSubmit)}>

            <input type="text" placeholder='Ingresa tu Nombre' name='name' ref={register} onBlur={handleInputChange} re/>
            <p>{errors.name?.message}</p>
            <input type="text" placeholder='Ingresa tu Email' name='email' ref={register} onBlur={handleInputChange}/>
            <p>{errors.email?.message}</p>
            <input type="text" placeholder='Ingresa tu telefono' name='phone' ref={register} onBlur={handleInputChange}/>
            <p>{errors.phone?.message}</p>
            <Button type="submit">Comprar</Button>
        </form>
    )
}

export default CheckoutForm