import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Box } from "@mui/material";
import RecipeCard from "../components/RecipeCard";
import Layout from "../components/Layout/Layout";
import Grid from "@mui/material/Grid";
import { useQuery } from '@apollo/client';
import { SEARCH_QUERY } from '../graphql/query'


const Result = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const ingredList = location.state.ingredList;
  // const [ingredList, setingredList] = useState(location.state.ingredList);
  console.log(location.state.ingredList);
  const { data, loading, subscribeToMore } = useQuery(SEARCH_QUERY, {
    variables: {
      ingredients: ingredList
    }
  });


  useEffect(() => {
    // console.log('data', data);
    if (data) {
      console.log('data.recipes', data.recipes);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;


  return (
    <Layout>
      <Box sx={{ display: "flex" }}>
        <Grid container spacing={5}>
          {
            data && data.recipes && data.recipes.map(recipe => (
              <Grid item key={'recipe'+recipe.id}>
                <RecipeCard
                  recipe={recipe}
                  recipes={data.recipes}
                />
              </Grid>
            )
            )
          }
        </Grid>
      </Box>
    </Layout>
  );
}

export default Result;