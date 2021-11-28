import { createContext, useState } from 'react'
const CartData = createContext()
const { Provider} = CartData


 const CartContext = ({children}) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)


    const addToCart = (item,qty) => {
        const index = cart.findIndex(cartItem => cartItem.id === item.id)
        if(index !== -1) {
            const newCart = [...cart]
            newCart[index].qty += qty
            setCart(newCart)
        }else{
            setCart([...cart, item])
        }
    }
    const removeFromCart = (item) => {
        const auxCart = cart
        const index = auxCart.findIndex(producto => producto.id ===item.id)
        setCart(auxCart.filter((producto,i) => i !== index))
    }
    const clearCart = () => {
        setCart([])
    }

    const calculateTotal = (data) => {
        let sum = 0
        data.forEach(item => {
            sum += item.price * item.qty
        })
        setTotal(sum)
    }


    return(
        <Provider value={{cart, setCart, addToCart , removeFromCart, clearCart, calculateTotal, total}}>
            {children}
        </Provider>

    )
}

export {CartContext, CartData}