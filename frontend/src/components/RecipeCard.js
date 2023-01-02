import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Chip
} from "@mui/material";

import { Link } from "react-router-dom";

import { styled } from '@mui/material/styles';

import tagDict from '../json/tags.json';

const colorMap = {
  customized: "error",
  region: "primary",
  difficulty: "secondary",
  time: "info",
}


export default function RecipeCard({id, imageURL, title, tags, searchList}) {
  // console.log(tagDict);

  return (
    <Card sx={{ width: 340, height: 380 }}>
      <CardActionArea component={Link}
        to={`/detail/${id}`}
        state={{ searchList: searchList }}
      >
      {/* <CardActionArea> */}
      {/* <Link
        to={`/detail/${id}`}
        state={{ searchList: searchList }}
        style={{ textDecoration: 'none' }}
      > */}
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
                let color = null;
                Object.keys(tagDict).forEach((tagType, index) => {
                  {/* console.log(dict.contents, tag); */}
                  if (tagDict[tagType].includes(tag)) {
                    color = colorMap[tagType];
                    return;
                  }
                });

                if (color) {
                  //  console.log(color);
                  if (color === "error") {
                    return (
                      <Chip key={'chip'+ind} label={tag} color={color} sx={{ m: 0.6 }} />
                    );
                  }
                  return (
                    <Chip key={'chip'+ind} label={tag} color={color} variant="outlined" sx={{ m: 0.6 }} />
                  );
                }
              })
            }
          </Box>

        </CardContent>
        {/* </Link> */}
      </CardActionArea>
    </Card>
  );
};