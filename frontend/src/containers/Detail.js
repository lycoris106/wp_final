import { useContext, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';
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
  Chip
} from "@mui/material";

import { useQuery } from '@apollo/client';
import { GET_RECIPE_QUERY } from '../graphql/query'

import CheckIcon from '@mui/icons-material/Check';


import tagDict from '../json/tags.json';

const colorMap = {
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

  const location = useLocation();
  const searchList = location.state.searchList;

  let { id } = useParams();

  const { data, loading, subscribeToMore } = useQuery(GET_RECIPE_QUERY, {
    variables: {
      id: id,
      ingredients: searchList
    }
  });

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
      {/* <Container  sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }} >
      <Container maxWidth="md" sx={{
        display: 'flex',
        justifyContent: "space-between",
        alignContent: "center",
        maxHeight: "10vh",
         }}>
        <Typography variant="h3" component="div" align="center" sx={{ textAlign: "center" }}>
            {title}
          </Typography>
          <Typography variant="h5" component="div" align="center">
            {"Customized?"}
          </Typography>
      </Container>
      <Divider variant="middle" />
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: "space-between" }}>
        <CardMedia component="img" image={imgURL} sx={{ maxWidth: "50%" }}/>
        <Typography variant="h5" component="div">other infomations</Typography>
      </Container>
      <Divider variant="middle" />
      <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", rowGap: "1em"}}>
        {instructions.map((ins, index) => (
          <Instruction key={index} instruction={ins} index={index} />
        ))}
      </Container>
      </Container> */}
    </Layout>
  );
}

export default Detail;