import { NavLink } from 'react-router-dom'
import Navlogo from './Navlogo'
import CartWidget from '../../cart/CartWidget'
import { NavItem, NavMenu } from '@mui-treasury/components/menu/navigation';
import Typography from '@mui/material/Typography';

function Navbar(){
    
    return(
        <NavMenu gutter={'80px'} style={{background: "#f6416c"}} position='sticky'>
            <NavItem to='/' as={NavLink} ><Navlogo/></NavItem>
            <NavItem style={{color:'white'}} to='/catalogo' as={NavLink}> <Typography variant='h5'>catalogo</Typography> </NavItem>
            <NavItem style={{color:'white'}} to='/categoria/entrada' as={NavLink}><Typography variant='h5'>entradas</Typography></NavItem>
            <NavItem style={{color:'white'}} to='/categoria/principal' as={NavLink}><Typography variant='h5'>principales</Typography></NavItem>
            <NavItem style={{color:'white'}} to='/categoria/postre' as={NavLink}><Typography variant='h5'>postres</Typography> </NavItem>
            {/* <NavItem style={{color:'white'}} to='/favorito' as={NavLink}> Favoritos</NavItem> */}
            <NavItem style={{color:'white'}} to='/cart' as={NavLink}><CartWidget/></NavItem>
            {/* <NavItem style={{color:'white'}} to='/user' as={NavLink}> <span className="material-icons">account_circle</span> </NavItem> */}
        </NavMenu>
        
    )
}
export default Navbar