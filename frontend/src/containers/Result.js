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
    },
  });

  useEffect(() => {
    console.log('data', data);
    if (data) {
      console.log('data.recipes', data.recipes);
    }
  }, [data]);

  return (
    <Layout>
      <Box sx={{ display: "flex" }}>
        <Grid container spacing={5}>
          {
            data && data.recipes && data.recipes.map(recipe => (
              <Grid item key={'recipe'+recipe.id}>
                <RecipeCard
                  // imageURL={require("../devFiles/img/4405dc8988.jpg")}
                  title={recipe.title}
                  tags={["healthy", "vegan", "easy2make"]}
                />
              </Grid>
            )
            )
          }
          {/* <Grid item>
            <RecipeCard
              imageURL={require("../devFiles/img/4405dc8988.jpg")}
              title={"Chocolate"}
              steps={["Melt the chocolate", "..."]}
              tags={["healthy", "vegan", "easy2make"]}
            />
          </Grid>
          <Grid item>
            <RecipeCard
              imageURL={require("../devFiles/img/440578f0ff.jpg")}
              title={"Bread"}
              steps={["Mix flour & egg", "Add milk and sugar", "Keep mixing"]}
              tags={["easy2make"]}
            />
          </Grid>
          <Grid item>
            <RecipeCard
              imageURL={require("../devFiles/img/2433907268.jpg")}
              title={"Strawberry Smoothie"}
              steps={["Put strawberries in the blender", "Turn on the blender", "Pour it out into a cup"]}
              tags={["vegan", "hard2make"]}
            />
          </Grid> */}
        </Grid>
      </Box>
    </Layout>
  );
}

export default Result;