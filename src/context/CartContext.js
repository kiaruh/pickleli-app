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
    const removeFromCart = (item) => {
        const auxCart = cart
        const index = auxCart.findIndex(producto => producto.id ===item.id)
        console.log("index:"+index)
        setCart(auxCart.filter((producto,i) => i !== index))
    }


    return(
        <Provider value={{cart, setCart, addToCart , removeFromCart}}>
            {children}
        </Provider>

    )
}

export {CartContext, CartData}