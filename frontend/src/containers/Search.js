import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
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

import ingredData from '../devFiles/ingredData.json';

const colorMap = {
  "meat": "error",
  "vegetable": "success",
  "dairy&egg": "warning",
  "fruit": "info",
  "other": "secondary"
};

const Search = () => {
  const navigate = useNavigate();
  // console.log(ingredData);

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

  return (
    <Layout>
      <Box sx={{ display: "flex" }}>
        <Card sx={{ width: '50vw', backgroundColor: "#fcf9f4", borderRadius: '16px', px:1 }}>
          <CardHeader
            title="What's in your fridge?"
          />
          <Divider />
          <Stack direction="row" spacing={2}>
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
          </Stack>
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={1}
              sx={{ m: 1 }}
            >
              {
                ingredData.map((ingred) => {
                  let color = undefined;
                  ingred.type.forEach((clas) => {
                    if (clas in colorMap) {
                      color = colorMap[clas];
                      return
                    }
                  })
                  if (filter === 'All' || ingred.type.includes(filter)) {
                    return (
                      <Grid key={'grid'+ingred.id}
                        item
                      >
                        <Chip key={'chip'+ingred.id} label={ingred.name}
                          variant={selected.has(ingred.id)? "outlined" : "outlined"}
                          color={color} sx={{ m: 0.6, backgroundColor: selected.has(ingred.id)? "#b9b9b9" : "default" }}
                          onClick={() => handleSelectionChanged(ingred.id)}
                        />
                      </Grid>
                    );
                  }

                  return;
                })
              }

            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ maxHeight: '80vh', width: '20vw', backgroundColor: "#fcf9f4", borderRadius: '16px', mx: 8, px: 1}}>
          <CardHeader
            title="My ingredients"
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={1}
              sx={{ m: 1 }}
            >
              {
                ingredData.map((ingred) => {
                  if (selected.has(ingred.id)) {
                    return (
                      <Grid key={'grid_'+ingred.id}
                        item
                      >
                        <Chip key={'chip_'+ingred.id} label={ingred.name}
                          variant="outlined"
                          sx={{ m: 0.6 }}
                        />
                      </Grid>
                    )
                  }
                })
              }
            </Grid>
          </CardContent>
          <Divider />
          <CardActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Button
              color="primary"
              fullWidth
              variant="contained"
            >
              Search
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Layout>
  );
}

export default Search;