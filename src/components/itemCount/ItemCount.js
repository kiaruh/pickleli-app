import {useState, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { Button, TableCell } from '@mui/material'
import {CartData} from '../../context/CartContext'

function ItemCount({stock,inicial}) {

    const [cantidad, setCantidad] = useState(inicial)
    const {setCart} = useContext(CartData)

    const sumarContador = () => {
        if(cantidad < stock){
        return setCantidad(cantidad +1)
        }else{
           return setCantidad(stock)
       }
    }
    const restarContador = () => {
       if(cantidad>1){
        return setCantidad(cantidad -1)
       }else{
           return setCantidad(inicial)
       }
    }
    const Producto = {
        id: '10',
        price: '$999',
        qty: cantidad
    }


    return(
        <TableCell>
            <Button variant='contained' className='material-icons' onClick={sumarContador}>+</Button>
            <p>{cantidad}</p>
            <Button variant='contained' className='material-icons' onClick={restarContador}>-</Button>
            <p>stock disponible: {stock}</p>
            <Button onClick={()=>{setCart(Producto)}}>Agregar a carrito</Button>
            <Button to='/cart' component={NavLink}> check out</Button>
        </TableCell>
    )

    }

export default ItemCount