import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function RecipeCard({imageURL, title, Steps}) {
  return (
    <Card sx={{ maxWidth: 345, height:350 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {imageURL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary" align="center">
            {description}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};