import {useState} from "react"
import ItemCount from "../itemCount/ItemCount"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ItemDetail = (props) => {
     const [count, setCount] = useState(0)
    const producto = props.props

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="500"
            width="400"
            image={producto.img}
            alt="imagen comida"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {producto.name} - ${producto.price}
            </Typography>
            <Typography variant="body2" color="text.primary">
            {producto.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Catidad seleccionado: {count}
            </Typography>
            
        </CardContent>
        <CardActions>
        <ItemCount props={producto} count={(count)=>setCount(count)} />
        </CardActions>
        </Card>
    )
}

export default ItemDetail