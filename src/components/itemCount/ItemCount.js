import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Button, TableCell } from '@mui/material'

function ItemCount({stock,inicial,onAdd}) {

    const [cantidad, setCantidad] = useState(inicial)

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

    return(
        <TableCell>
            <Button variant='contained' className='material-icons' onClick={sumarContador}>+</Button>
            <p>{cantidad}</p>
            <Button variant='contained' className='material-icons' onClick={restarContador}>-</Button>
            <p>stock disponible: {stock}</p>
            <Button onClick={()=> onAdd(cantidad)}>Agregar a carrito</Button>
            <Button to='/cart' component={NavLink}> check out</Button>
        </TableCell>
    )

    }

export default ItemCount