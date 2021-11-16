import { createContext, useState } from 'react'

const CartData = createContext()
const { Provider} = CartData


 const CartContext = ({children}) => {

    const [cart, setCart] = useState([])
    const [subtotal, setSubtotal] = useState([])

    const addToCart = (item,qty) => {
        setCart([...cart, item])
        setSubtotal([...subtotal, qty*item.price])
    }

    return(
        <Provider value={{cart, setCart,addToCart}}>
            {children}
        </Provider>

    )
}

export {CartContext, CartData}