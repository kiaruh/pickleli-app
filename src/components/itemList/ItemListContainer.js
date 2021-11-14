import { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { NavLink } from "react-router-dom"
import { TableContainer, Table, TableBody , TableRow} from '@mui/material'

function ItemListContainer(props){

    const [products, setProducts] = useState([])
     //`http://localhost:3001/products`
    //`https://api-pickle.herokuapp.com/products`

    useEffect(()=>{
        const obtenerData = async () => {
            const data = await fetch(`https://api-pickle.herokuapp.com/products`)
            const datajson = await data.json()
            setProducts(datajson)
         };
        obtenerData()},[])

    if (products.length === 0) {
        return <p>Cargando Productos... </p>}


    return (
        
            <TableContainer>
                <Table>
                    <TableBody>
                        
            {products.map((e,i)=> <TableRow key={e+i} > <NavLink to={'/producto/'+e.id} > <ItemList id={e.id} name={e.name} price={e.price} qty={e.qty} initialstock={e.initialstock} pic={e.img} /></NavLink> </TableRow> )}
                        
                    </TableBody>
                </Table>    
            </TableContainer>
       
    )
}
export default ItemListContainer