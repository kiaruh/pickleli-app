import { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { NavLink } from "react-router-dom"
import { TableContainer, Table, TableBody , TableRow} from '@mui/material'
import { firestore } from "../../firebase"

function ItemListContainer(props){
    
    const [products, setProducts] = useState([])

    useEffect(()=>{


        const db = firestore
        const collection = db.collection("productos")
        const promesa = collection.get()
        var productos = []
       
        promesa.then((documents)=>{ documents.forEach((document)=>{ 
            productos.push({id:document.id, ...document.data()})
            })

            console.log(productos)
            setProducts(productos)
        })

    },[])

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