import {useState, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { Button, TableCell } from '@mui/material'
import {CartData} from '../../context/CartContext'

function ItemCount({props, count}) {

    const [cantidad, setCantidad] = useState(props.initialstock)
    const {addToCart} = useContext(CartData)

    const sumarContador = () => {
        if(cantidad < props.qty){
        return setCantidad(cantidad +1)
        }else{
           return setCantidad(props.qty)
       }
    }
    const restarContador = () => {
       if(cantidad>1){
        return setCantidad(cantidad -1)
       }else{
           return setCantidad(props.qty)
       }
    }
    const Producto = {
        id: props.id,
        price: props.price,
        name: props.name,
        img: props.img,
        qty: cantidad
    }

    


    return(
        <TableCell>
            <Button variant='contained' className='material-icons' onClick={sumarContador}>+</Button>
            <p>{cantidad}</p>
            <Button variant='contained' className='material-icons' onClick={restarContador}>-</Button>
            <p>stock disponible: {props.qty}</p>
            <Button onClick={()=>{
                count(cantidad)
                addToCart(Producto, cantidad)

            }}>Agregar a carrito</Button>
            <Button to='/cart' component={NavLink}> check out</Button>
        </TableCell>
    )

    }

export default ItemCount