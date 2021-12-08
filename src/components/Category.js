import { useEffect , useState } from "react"
import ItemList from "./itemList/ItemList"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom"
import { firestore } from "../firebase"
import { Grid, Box} from '@mui/material'
import Typography from '@mui/material/Typography';


function Category(props){

    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect(()=>{
        const db = firestore
        const collection = db.collection("productos")
        const promesa = collection.where('category', '==', `${category}`).get()
        var productos = []

        promesa.then((documents)=>{ 
            documents.forEach((document)=>{ 
                productos.push({id:document.id,...document.data()})
            })
            setProducts(productos)
        })
    
    },[category])

    if (products.length === 0) {
        return <p>Cargando Productos... </p>}


    return (
        <Box>
            <Typography variant='h4'>Categoria: {category}</Typography>
            <Grid container spacing={5} columns={12}>
            
            {products.map((e,i)=> <Grid item md={4} key={e+i}>  <NavLink to={'/producto/'+e.id} > 
                                    <ItemList id={e.id} name={e.name} price={e.price} qty={e.qty} initialstock={e.initialstock} pic={e.img} />   
                                </NavLink></Grid>)}

            </Grid>
        </Box>
    )
}
export default Category