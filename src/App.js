import React from 'react'
//import { CartContext } from './context/CartContext'
import Header from './components/layout/header/Header'
import Main from './components/layout/main/Main'
import Footer from './components/layout/footer/Footer'
import Cart from "./components/cart/Cart"
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer"
import ItemListContainer from './components/itemList/ItemListContainer'
import Category from './components/Category'
import Error from './components/Error'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Container from '@mui/material/Container'

function App() {

  return (
    <BrowserRouter>
    {/* <CartContext> */}
    <Container>
      <Header/>
          <Routes>
            <Route exact path="/" component={Main} />
            <Route path="/categoria/:id" component={Category} />
            <Route path="/catalogo/" component={ItemListContainer} />
            <Route path="/producto/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
            <Route component={Error}/>
          </Routes>
      <Footer/>
      </Container>
      {/* </CartContext> */}
      </BrowserRouter>
  )
}

export default App;
