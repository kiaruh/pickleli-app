import {useState, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { Button} from '@mui/material'
import {CartData} from '../../context/CartContext'
import { Box} from '@mui/material'
import Typography from '@mui/material/Typography';

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
        <Box container>
            <Box item xs={12} style={{display:'flex'}}>
            <Button size="small" variant='contained' className='material-icons' onClick={sumarContador}>+</Button>
            <Typography variant='h6'> {cantidad} </Typography>
            <Button size="small" variant='contained' className='material-icons' onClick={restarContador}>-</Button>
            </Box>
            <Typography variant="body2" color="text.secondary">stock disponible: {props.qty}</Typography>
            <Button size="small" onClick={()=>{
                count(cantidad)
                addToCart(Producto, cantidad)

            }}>Agregar a carrito</Button>
            <Button size="small" to='/cart' component={NavLink}> check out</Button>
        </Box>
    )

    }

export default ItemCount