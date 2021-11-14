import { useEffect , useState } from "react"
import ItemList from "./itemList/ItemList"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom"

function Category(props){

    const [products, setProducts] = useState([])
    const { id } = useParams()
    //`http://localhost:3001/products?category=${id}`
    //`https://api-pickle.herokuapp.com/products?category=${id}`
    useEffect(()=>{
        const obtenerData = async () => {
            const data = await fetch(`https://api-pickle.herokuapp.com/products?category=${id}`)
            const datajson = await data.json()
            setProducts(datajson)
         };
        obtenerData()},[id])

    if (products.length === 0) {
        return <p>Cargando Productos... </p>}


    return (
        <div className='ProductList'>
            <h2>Categoria: {id}</h2>
            {products.map((e,i)=> <NavLink key={e+i} to={'/producto/'+e.id} > <ItemList id={e.id} name={e.name} price={e.price} qty={e.qty} initialstock={e.initialstock} pic={e.img} /></NavLink>)}
        </div>
    )
}
export default Category