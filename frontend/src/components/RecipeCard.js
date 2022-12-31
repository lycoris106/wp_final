import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Chip,
  Grid
} from "@mui/material";

import { styled } from '@mui/material/styles';

// const StyledChip = styled(MuiChip, {
//   shouldForwardProp: (prop) =>
//     true
// })(({theme, ...props}) => {
//   console.log(props);
//   return {
//     borderColor: props.color,
//     color: 'red',
//   };
// });

export default function RecipeCard({imageURL, title, tags}) {
  const tagDictList = [
    {contents: ["healthy", "very healthy"], color: "primary"},
    {contents: ["vegan"], color: "primary"},
    {contents: ["easy2make", "hard2make"], color: "secondary"}
  ]

  return (
    <Card sx={{ width: 340, height: 380 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {imageURL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
            {
              tags.map((tag, ind) => {
                let i = -1;
                tagDictList.forEach((dict, index) => {
                  {/* console.log(dict.contents, tag); */}
                  if (dict.contents.includes(tag)) {
                    i = index;
                    return;
                  }
                });
                if (i !== -1) {
                  return (
                    <Chip key={'chip'+ind} label={tag} color={tagDictList[i].color} variant="outlined" sx={{ m: 0.6 }} />
                  );
                }
                return (
                  <Chip key={'chip'+ind} label={tag} variant="outlined" sx={{ m: 0.6 }} />
                );
              })
            }
          </Box>


          {/* <Typography variant="body2" color="text.secondary" align="center">
            {"description"}
          </Typography> */}

        </CardContent>
      </CardActionArea>
    </Card>
  );
};