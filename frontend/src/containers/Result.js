import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import RecipeCard from "../components/RecipeCard";
import Layout from "../components/Layout/Layout";
import Grid from "@mui/material/Grid";

const Result = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Box sx={{ display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item>
            <RecipeCard
              imageURL={require("../devFiles/img/4405dc8988.jpg")}
              title={"Chocolate or something"}
              Steps={["Melt the chocolate", "..."]}
            />
          </Grid>
          <Grid item>
            <RecipeCard
              imageURL={require("../devFiles/img/440578f0ff.jpg")}
              title={"Bread"}
              Steps={["Mix flour & egg", "Add milk and sugar", "Keep mixing"]}
            />
          </Grid>
          <Grid item>
            <RecipeCard
              imageURL={require("../devFiles/img/2433907268.jpg")}
              title={"Strawberry Smoothie"}
              Steps={["Put strawberries in the blender", "Turn on the blender", "Pour it out into a cup"]}
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Result;