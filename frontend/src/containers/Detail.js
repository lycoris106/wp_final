import { useContext, useEffect } from "react";
import { useParams, useLocation, Link } from 'react-router-dom';
import Layout from "../components/Layout/Layout.js";
import InstructList from "../components/Detail/InstructList.js";
import IngredItem from "../components/Detail/IngredItem"
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  CardMedia,
  Card,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Chip,
  AppBar,
  Toolbar
} from "@mui/material";

import { useQuery } from '@apollo/client';
import { GET_RECIPE_QUERY } from '../graphql/query'

import CheckIcon from '@mui/icons-material/Check';


import tagDict from '../json/tags.json';

const colorMap = {
  customized: "error",
  region: "primary",
  difficulty: "secondary",
  time: "info",
}

const StyledPaper = styled(Paper, {
  shouldForwardProp: (props) => props !== 'bgColor',
})(({theme, ...props}) => {
  console.log(props);
  return {
    backgroundColor: props.bgColor,
    padding: 10,
    marginBottom: 30
  };
});

const Detail = () => {

  let { id } = useParams();

  const location = useLocation();
  const searchList = location.state.searchList;
  const recipes = location.state.recipes;
  const curRecipe = recipes.find((rec) => {
    return rec.id === id;
  })
  const prevID = curRecipe.prev;
  const nextID = curRecipe.next;



  const { data, loading, subscribeToMore } = useQuery(GET_RECIPE_QUERY, {
    variables: {
      id: id,
      ingredients: searchList
    }
  });

  const handleSwap = () => {

  }

  useEffect(() => {
    // console.log('data', data);
    if (data) {
      console.log('data.recipe:', data.recipe);
    }
  }, [data]);

  // const title = data.recipe.title;
  // const imgURL = data.recipe.image_url;
  // const instructions = data.recipe.instructions;
  // const ingredList = data.recipe.ingredients;

  if (loading || (!data.recipe) || (!data.recipe.tags) || (!data.recipe.ingredients) || (!data.recipe.instructions)) return <p>Loading...</p>;

  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Link
          to={`/detail/${prevID}`}
          state={{ searchList: searchList, recipes: recipes }}
          style={{ textDecoration: 'none' }}
        >
          <Button variant="contained" style={{textTransform: 'none'}} >
            Prev Recipe
          </Button>
        </Link>

        <Link
          to={`/detail/${nextID}`}
          state={{ searchList: searchList, recipes: recipes }}
          style={{ textDecoration: 'none' }}
        >
          <Button variant="contained" style={{textTransform: 'none'}} >
            Next Recipe
          </Button>
        </Link>
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Card sx={{ width: 700, height:650, mb: 5}}>
            <Typography gutterBottom variant="h3" component="div" align="center" sx={{ fontWeight: 'bold' }}>
              {data.recipe.title}
            </Typography>
            <CardMedia
              component="img"
              image= {data.recipe.image_url}
            />
          </Card>
          <StyledPaper elevation={2} bgColor={'#fcf9f4'} sx={{ width: 700 }}>
            {
              data.recipe.tags.map((tag, ind) => {
                let color = null;
                Object.keys(tagDict).forEach((tagType, index) => {
                  {/* console.log(dict.contents, tag); */}
                  if (tagDict[tagType].includes(tag)) {
                    color = colorMap[tagType];
                    return;
                  }
                });

                if (color) {
                  if (color === "error") {
                    return (
                      <Chip key={'chip'+ind} label={tag} color={color} sx={{ m: 0.6 }} />
                    );
                  }
                  //  console.log(color);
                  return (
                    <Chip key={'chip'+ind} label={tag} color={color} variant="outlined" sx={{ m: 0.6 }} />
                  );
                }
                return (
                  <Chip key={'chip'+ind} label={tag} variant="outlined" sx={{ m: 0.6 }} />
                );
              })
            }
            {/* <Chip label={'Customized'}
              color={"primary"} sx={{ m: 0.6 }}
            /> */}
          </StyledPaper>
        </Grid>
        <Grid item xs={4}>
          <StyledPaper elevation={2} bgColor={'#fcf9f4'}>
            <Typography align="center" variant="h5" gutterBottom>
              Ingredient List
            </Typography>
            <Divider />
            <List>
              {
                data.recipe.ingredients.map((ing, idx) => (
                  <IngredItem key={'ing'+idx} ingred={ing} matches={data.recipe.matches[idx]}/>
                ))
              }

            </List>
          </StyledPaper>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ mt: 3 }}>
            <InstructList instructions={data.recipe.instructions} />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Detail;