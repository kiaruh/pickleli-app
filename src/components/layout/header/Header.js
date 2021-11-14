
import Navbar from '../nav/Navbar'
import { AppBar, IconButton , Toolbar} from '@mui/material'

function Header() {
    
    return(
        <AppBar style={{background: "#f6416c"}} color="transparent" >   
        <Toolbar>
        <IconButton edge='start' aria-label='menu' >
        <Navbar/>
        </IconButton> 
        </Toolbar>
        </AppBar> 
    )
}

export default Header