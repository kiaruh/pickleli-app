import { useEffect , useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router"
import './itemDetail.css'
import { TableContainer, Table, TableBody } from '@mui/material'

const ItemDetailContainer = (props) => {
    
    const { id } = useParams()
    const [details, setDetails] = useState([])
    //`http://localhost:3001/products/${id}`
    //`https://api-pickle.herokuapp.com/products/${id}`

    useEffect(()=>{
        const obtenerData = async () => {
            const data = await fetch(`https://api-pickle.herokuapp.com/products/${id}`)
            const datajson = await data.json()
            setDetails(datajson)
         };
        obtenerData()},[id])

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