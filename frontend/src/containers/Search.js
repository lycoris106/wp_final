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
  CardActions,
  Typography,
  TextField,
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

  const [text, setText] = useState("");

  const handleTextChange = (evt) => {
    const newText = evt.target.value;
    setText(newText);
  }

  const handleTypeIngred = (evt) => {
    const newSet = new Set(selected);
    const trimmedText = text.trim().toLowerCase()
    if (!newSet.has(trimmedText)) {
      newSet.add(trimmedText);
      setSelected(newSet)
    }

    setText("");
  }

  const handleSelectionChanged = (id) => {
    // treat state as immutable
    // React only does a shallow comparison so we need a new Set
    const trimmedText = id.trim().toLowerCase()
    const newSet = new Set(selected);
    if (newSet.has(trimmedText)) newSet.delete(trimmedText);
    else newSet.add(trimmedText);
    setSelected(newSet);
  };

  const handleFilterChange = (e) => {
    // console.log(e.currentTarget.value);
    setFilter(e.currentTarget.value);
  };

  const handleIngredDelete = (id) => {
    const trimmedText = id.trim().toLowerCase()
    const newSet = new Set(selected);
    newSet.delete(trimmedText);
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
                            color={color} sx={{ m: 0.6, backgroundColor: selected.has(key.trim().toLowerCase())? "#b9b9b9" : "default" }}
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
                            color={colorMap[filter]} sx={{ m: 0.6, backgroundColor: selected.has(ingred.trim().toLowerCase())? "#b9b9b9" : "default" }}
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
          <Box
            sx={{
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Card sx={{ minWidth: '25vw', maxHeight: '23vh', backgroundColor: "#fcf9f4", borderRadius: '16px', mx: 8, px: 1, mb: 3}}>
              <CardHeader
                titleTypographyProps={{ variant:'h6' }}
                title="Cannot find your ingredient?"
                subheader={<Typography>{"directly add:"}</Typography>}
              />
              <CardContent sx={{ pt: 0}}>
                <TextField fullWidth
                  required
                  value={text}
                  id="outlined-required"
                  label="Ingredient Name"
                  placeholder="Ex. Clam"

                  autoFocus={true}
                  onChange={handleTextChange}
                />
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: 0 }}>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleTypeIngred}
                  >
                    Add
                  </Button>
              </CardActions>

            </Card>

            <Card sx={{ minWidth: '25vw', maxHeight: '80vh', backgroundColor: "#fcf9f4", borderRadius: '16px', mx: 8, px: 1}}>
              <CardHeader
                title="My ingredients"
              />
              <Divider />
              <CardContent>
                <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
                  {
                    Array.from(selected).map((ingred) => {
                      return (
                        <Chip key={'chip_'+ingred} label={ingred}
                          variant="outlined"
                          sx={{ m: 0.6 }}
                          onDelete={() => handleIngredDelete(ingred)}
                        />
                      );
                    })
                  }
                </Box>
              </CardContent>

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


          </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Search;