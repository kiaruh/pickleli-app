
import ItemListContainer from "../../itemList/ItemListContainer"
import { TableContainer, Table, TableBody } from '@mui/material'
   

function Main(props){

    return(
        <TableContainer>
            <Table>
                <TableBody>
        <main>
            <ItemListContainer/>
        </main>
                </TableBody>
             </Table>
        </TableContainer>
    )
    }

export default Main