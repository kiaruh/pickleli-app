import { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { NavLink } from "react-router-dom"
import { Grid, Box} from '@mui/material'
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
            setProducts(productos)
        })

    },[])

    if (products.length === 0) {
        return <p>Cargando Productos... </p>}


    return (
        
            <Box>
                <Grid container spacing={2} columns={12}>
                        
            {products.map((e,i)=> <Grid item md={4} key={e+i} > 
                                    <NavLink to={'/producto/'+e.id} >
                                         <ItemList id={e.id} name={e.name} price={e.price} qty={e.qty} initialstock={e.initialstock} pic={e.img} />
                                    </NavLink> 
                                 </Grid> )}
                        
                </Grid>    
            </Box>
       
    )
}
export default ItemListContainer