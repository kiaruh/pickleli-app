import { useEffect , useState } from "react"
import ItemList from "./itemList/ItemList"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom"
import { firestore } from "../firebase"

function Category(props){

    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect(()=>{
        const db = firestore
        const collection = db.collection("productos")
        const promesa = collection.get()
        var productos = []

        promesa.then((documents)=>{ 
            documents.forEach((document)=>{ 
            if(document.data().category === category){
                productos.push(document.data())
            }})
            setProducts(productos)
        })

    
    },[category])

    if (products.length === 0) {
        return <p>Cargando Productos... </p>}


    return (
        <div className='ProductList'>
            <h2>Categoria: {category}</h2>
            {products.map((e,i)=> <NavLink key={e+i} to={'/producto/'+e.id} > <ItemList id={e.id} name={e.name} price={e.price} qty={e.qty} initialstock={e.initialstock} pic={e.img} /></NavLink>)}
        </div>
    )
}
export default Category