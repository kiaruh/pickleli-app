import {useState} from "react"
import ItemCount from "../itemCount/ItemCount"
import { Card } from '@mui/material'


const ItemDetail = (props) => {
     const [count, setCount] = useState(0)
    // const producto = {id,name,price,pic}
    const producto = props.props

    return (
        <>
            <picture> <img style={{width:'400px', height:'500px'}} src={producto.img} alt="" /></picture>
            <h2>{producto.name}</h2>
            <h3>${producto.price}</h3>
            <ItemCount props={producto} count={(count)=>setCount(count)} />
            <Card>{producto.description}</Card>
            <Card>Catidad seleccionado: {count}</Card>
        </>
    )
}

export default ItemDetail