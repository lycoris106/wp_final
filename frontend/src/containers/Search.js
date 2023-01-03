import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link, useParams } from "react-router-dom";
import { color, Container } from "@mui/system";
import {
  Box,
  Grid,
  Chip,
  Card,
  CardHeader,
  Divider,
  Button,
  Stack,
  CardContent,
  CardActions
} from '@mui/material';


import ingredData from '../json/ingredients.json';

const ingredSet = [];
Object.keys(ingredData).forEach((key) => {
  ingredData[key].forEach((li) => {
    if (!ingredSet.hasOwnProperty(li)) {
      ingredSet[li] = key;
    }

  })
})

const colorMap = {
  meat: "error",
  vegetable: "success",
  manufactured: "warning",
  fruit: "info",
  seasoning: "secondary",
  grain: "default",
  sauce: "default",
  husbandry: "default"

};

const Search = () => {
  const navigate = useNavigate();
  // console.log(ingredData);
  let { username } = useParams();

  const [selected, setSelected] = useState(new Set());
  const [filter, setFilter] = useState('All')

  const handleSelectionChanged = (id) => {
    // treat state as immutable
    // React only does a shallow comparison so we need a new Set
    const newSet = new Set(selected);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelected(newSet);
  };

  const handleFilterChange = (e) => {
    // console.log(e.currentTarget.value);
    setFilter(e.currentTarget.value);
  };

  const handleIngredDelete = (id) => {
    const newSet = new Set(selected);
    newSet.delete(id);
    setSelected(newSet);
  }

  return (
    <Layout>
      <Box sx={{ display: "flex" }}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Card sx={{ backgroundColor: "#fcf9f4", borderRadius: '16px', px:1 }}>
              <CardHeader
                title="What's in your fridge?"
              />
              <Divider />
              <Box sx={{ display: "flex", justifyContent: "center", flexWrap: 'wrap'}}>
                <Button
                  value={'All'}
                  variant={('All' === filter)? "contained" : "default" }
                  onClick={handleFilterChange}
                >All</Button>
                {
                  Object.keys(colorMap).map((key) => {
                    return (
                      <Button
                        key={'filter'+key}
                        value={key}
                        color="primary"
                        variant={(key === filter)? "contained" : "default"}
                        onClick={ handleFilterChange }
                      >
                        {key}
                      </Button>
                    );
                  })
                }
              </Box>
              <Divider />
              <CardContent>
                <Grid
                  container
                  spacing={1}
                  sx={{ m: 1 }}
                >
                  {
                    (filter === 'All') ?
                    Object.keys(ingredSet).map((key) => {
                      let color = colorMap[ingredSet[key]];
                      return (
                        <Grid key={'grid'+key}
                          item
                        >
                          <Chip key={'chip'+key} label={key}
                            variant={"outlined"}
                            color={color} sx={{ m: 0.6, backgroundColor: selected.has(key)? "#b9b9b9" : "default" }}
                            onClick={() => handleSelectionChanged(key)}
                          />
                        </Grid>
                      );
                    }) : ingredData[filter].map((ingred) => {
                      return (
                        <Grid key={'grid'+ingred}
                          item
                        >
                          <Chip key={'chip'+ingred} label={ingred}
                            variant={"outlined"}
                            color={colorMap[filter]} sx={{ m: 0.6, backgroundColor: selected.has(ingred)? "#b9b9b9" : "default" }}
                            onClick={() => handleSelectionChanged(ingred)}
                          />
                        </Grid>
                      );
                    })
                  }

                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Card sx={{ maxHeight: '80vh', backgroundColor: "#fcf9f4", borderRadius: '16px', mx: 8, px: 1}}>
              <CardHeader
                title="My ingredients"
              />
              <Divider />
              <CardContent>
                <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
                  {
                    Object.keys(ingredSet).map((key) => {
                      if (selected.has(key)) {
                        return (
                          <Chip key={'chip_'+key} label={key}
                            variant="outlined"
                            sx={{ m: 0.6 }}
                            onDelete={() => handleIngredDelete(key)}
                          />
                        )
                      }
                    })
                  }
                </Box>
              </CardContent>
              <Divider />
              <CardActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Link
                  to={`/user/${username}/result`} state={{ ingredList: Array.from(selected) }}
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    color="primary"
                    fullWidth
                    variant="contained"
                  >
                    Search
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Search;