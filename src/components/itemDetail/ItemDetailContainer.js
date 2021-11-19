import { useEffect , useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router"
import './itemDetail.css'
import { TableContainer, Table, TableBody } from '@mui/material'
import { firestore } from "../../firebase"

const ItemDetailContainer = (props) => {
    
    const { id } = useParams()
    const [details, setDetails] = useState([])


    useEffect(()=>{

        const db = firestore
        const collection = db.collection("productos")
        const promesa = collection.get()

        promesa.then((documents)=>{ 
            documents.forEach((document)=>{ 
            if(document.data().id === id){
                setDetails(document.data())
            }})
        })

    },[id])

    if (details.length === 0) {
        return <p>Cargando detalles... </p>}

    return (
        <TableContainer>
                <Table>
                    <TableBody>
                        
            <ItemDetail props={details} />
                       
                    </TableBody>
                </Table>    
        </TableContainer>
    )
}

export default ItemDetailContainer