
import ItemListContainer from "../../itemList/ItemListContainer"
import { TableContainer, Table, TableBody } from '@mui/material'
   

function Home(props){

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

export default Home