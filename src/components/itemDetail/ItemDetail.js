// import {useState} from "react"
import ItemCount from "../itemCount/ItemCount"
import { Card } from '@mui/material'


const ItemDetail = (details) => {
    // const [count, setCount] = useState(0)
    // const producto = {id,name,price,pic}

    return (
        <>
            <picture> <img style={{width:'400px', height:'500px'}} src={details.details.img} alt="" /></picture>
            <h2>{details.details.name}</h2>
            <h3>${details.details.price}</h3>
            <ItemCount details={details.details} stock={details.details.qty} inicial={details.details.initialstock} />
            <Card>{details.details.description}</Card>
            <Card>Catidad seleccionado: </Card>
        </>
    )
}

export default ItemDetail