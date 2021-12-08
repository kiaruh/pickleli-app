import React from 'react'
import { CartContext } from './context/CartContext'
import Header from './components/layout/header/Header'
import Home from './components/layout/routes/Home'
import Footer from './components/layout/footer/Footer'
import Cart from "./components/cart/Cart"
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer"
import ItemListContainer from './components/itemList/ItemListContainer'
import Category from './components/Category'
import Error from './components/layout/routes/Error'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Container from '@mui/material/Container'
import { Checkout } from './components/checkout/Checkout'


function App() {

  return (
    <BrowserRouter>
    <CartContext>
    <Container>
      <Header/>
          <Routes>
            <Route end path="/" element={<Home />} />
            <Route path="/categoria/:category" element={<Category/>} />
            <Route path="/catalogo" element={<ItemListContainer/>} />
            <Route path="/producto/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route element={<Error/>}/>
          </Routes>
      <Footer/>
      </Container>
      </CartContext>
      </BrowserRouter>
  )
}

export default App;
