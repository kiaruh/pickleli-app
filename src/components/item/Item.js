import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const useStyles = makeStyles({
    root: {
      maxWidth: 290,
    },
    media: {
      height: 310,
    },
  })

function Item({name,price,pic}){
    
    const classes = useStyles()

    return(
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia className={classes.media}
          component="img"
          image={pic}
          alt="imagen de comida"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1." color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
        </Card>

    )

}

export default Item