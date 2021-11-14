import React, { createContext, useState } from 'react'

const context = createContext()


 const CartContext = ({children}) => {

    const [cart, setCart] = useState([])
    const auxCart = [...cart]

    const addProduct = (item,quantity) => {
        if(isInCart(item.id)){
           const producto =  cart.find(p=>p.id === item.id)
           producto.qty = producto.qty + quantity
           auxCart.splice(productIndex(item.id),1)
           setCart([...auxCart,producto])

        }else{
            setCart([...cart,item])
        }

    }

    const clear = setCart([])

    const isInCart = (id) => cart.find(p => p.id === id)

    const productIndex = (id) => cart.findIndex(p=>p.id=== id)

    const removeProduct = (id) => {
        const productoAremover = cart.findIndex(p => p.id === id)
        auxCart.splice(productoAremover,1)
        setCart(auxCart)
    }

    return(
        <context.Provider value={{addProduct, cart, setCart, removeProduct, clear, isInCart}}>
            {children}
        </context.Provider>

    )
}

export {CartContext, context}