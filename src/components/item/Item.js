import { TableCell } from '@mui/material'


function Item({name,price,pic}){

    return(
        <TableCell>
            <picture> <img style={{width:'240px', height:'300px', borderRadius:'25px'}} src={pic} alt="" /></picture>
            <h2>{name}</h2>
            <h3>${price}</h3>
        </TableCell>

    )

}

export default Item