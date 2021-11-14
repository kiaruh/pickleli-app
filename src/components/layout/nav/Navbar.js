import { NavLink } from 'react-router-dom'
import React from "react"
import Navlogo from './Navlogo'
import './navbar.css'
import {Button} from '@mui/material'


function Navbar(){


    return(
        <>
            <Button to='/' component={NavLink} > <Navlogo /></Button>
            <Button style={{color:'white'}} to='/catalogo' component={NavLink} > Catalogo</Button>
            <Button style={{color:'white'}} to='/categoria/entrada' component={NavLink}> Entradas</Button>
            <Button style={{color:'white'}} to='/categoria/plato' component={NavLink}> Platos </Button>
            <Button style={{color:'white'}} to='/categoria/postre' component={NavLink}> Postres </Button>
            <Button style={{color:'white'}} to='/favorito' component={NavLink}> Favoritos</Button>
            <Button style={{color:'white'}} to='/cart' component={NavLink}> <span className="material-icons">shopping_cart</span></Button>
            <Button style={{color:'white'}} to='/user' component={NavLink}> <span className="material-icons">account_circle</span> </Button>
        </>
    )
}
export default Navbar