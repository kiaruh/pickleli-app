import { NavLink } from 'react-router-dom'
import React from "react"
import Navlogo from './Navlogo'
import './navbar.css'
import { NavItem, NavMenu } from '@mui-treasury/components/menu/navigation';


function Navbar(){
    

    return(
        <NavMenu gutter={'45px'}>
            <NavItem to='/' as={NavLink} ><Navlogo/></NavItem>
            <NavItem style={{color:'white'}} to='/catalogo' as={NavLink} > Catalogo</NavItem>
            <NavItem style={{color:'white'}} to='/categoria/entrada' as={NavLink}> Entradas</NavItem>
            <NavItem style={{color:'white'}} to='/categoria/plato' as={NavLink}> Platos </NavItem>
            <NavItem style={{color:'white'}} to='/categoria/postre' as={NavLink}> Postres </NavItem>
            <NavItem style={{color:'white'}} to='/favorito' as={NavLink}> Favoritos</NavItem>
            <NavItem style={{color:'white'}} to='/cart' as={NavLink}> <span className="material-icons">shopping_cart</span></NavItem>
            <NavItem style={{color:'white'}} to='/user' as={NavLink}> <span className="material-icons">account_circle</span> </NavItem>
        </NavMenu>
    )
}
export default Navbar