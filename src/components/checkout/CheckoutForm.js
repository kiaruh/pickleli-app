import { useForm } from 'react-hook-form'


function CheckoutForm({setUser, user}){
    
    const {register, errors, handleSubmit} = useForm()

    const handleInputChange = (event) => {
        setUser({...user, [event.target.name]:event.target.value})
    }

    const onBlur = (data) => {
        console.log(data)
    }

    return(
        <form onBlur={handleSubmit(onBlur)}>
            <input type="text" placeholder='Ingrese Nombre' name='name' onChange={handleInputChange}/>
            <input type="text" placeholder='Ingrese Email' name='email' onChange={handleInputChange}/>
            <input type="text" placeholder='Ingrese telefono' name='phone' onChange={handleInputChange}/>
        </form>
    )
}

export default CheckoutForm