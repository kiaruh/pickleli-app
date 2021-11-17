import Item from "../item/Item"
import { TableCell } from '@mui/material'



function ItemList({name,qty,initialstock,price,pic}){


    return (
        <>
            <TableCell>
                <Item name={name} qty={qty} initialstock={initialstock} price={price} pic={pic}/>
            </TableCell>
        </>

    )
}

export default ItemList