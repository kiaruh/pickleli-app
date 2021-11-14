
import ItemCount from '../itemCount/ItemCount';
import { Button, TableCell } from '@mui/material'


function Item({name,qty,initialstock,price,pic}){

    return(
        <TableCell>
            <picture> <img style={{width:'240px', height:'300px', borderRadius:'25px'}} src={pic} alt="" /></picture>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <ItemCount stock={qty} inicial={initialstock} />
            <Button>Agregar a carrito</Button>
            <Button>Mas del producto</Button>
        </TableCell>

    )

}

export default Item