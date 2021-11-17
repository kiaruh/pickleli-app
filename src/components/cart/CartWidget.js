import { useContext } from "react"
import { CartData } from "../../context/CartContext"



const CartWidget = (props) =>{
    const { cart } = useContext(CartData)

    if(cart.length === 0){
        return(
            <>
            <span className="material-icons">shopping_cart</span>
            </>
        )
        }

    return(
        <>
        <span className="material-icons">shopping_cart</span>
        <div className='circle'>{cart.length}</div>
        </>

    )
}

export default CartWidget