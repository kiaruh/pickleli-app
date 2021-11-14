import {useState, useContext} from "react"
import ItemCount from "../itemCount/ItemCount"
import { context } from '../../context/CartContext'
import { Card } from '@mui/material'


const ItemDetail = ({id,name,qty,initialstock,price,pic,detail}) => {
    const [count, setCount] = useState(0)
    const producto = {id,name,price,pic}
    const { addProduct } = useContext(context)

    if(!count){
        addProduct(producto,count)
    }
    
    

    return (
        <>
            <picture> <img style={{width:'400px', height:'500px'}} src={pic} alt="" /></picture>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <ItemCount stock={qty} inicial={initialstock} onAdd={count => setCount(count)} />
            <Card>{detail}</Card>
            <Card>Catidad seleccionado: {count}</Card>
        </>
    )
}

export default ItemDetail