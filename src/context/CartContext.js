import { createContext, useState } from 'react'

const CartData = createContext()
const { Provider} = CartData


 const CartContext = ({children}) => {

    const Producto = {
        id: '000',
        price: '$0000'
    }

    const [cart, setCart] = useState(Producto)

    return(
        <Provider value={{cart, setCart}}>
            {children}
        </Provider>

    )
}

export {CartContext, CartData}