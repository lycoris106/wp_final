import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import IngredientInput from "../components/IngredientInput";
import InstructionInput from "../components/InstructionInput";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from '@mui/icons-material/Cancel';
import {
  TextField,
  Paper,
  Container,
  Divider,
  Typography,
  Fab,
  IconButton,
  Button
} from "@mui/material";

import {
  Card,
  CardHeader,
  CardContent,
  Grid
} from "@mui/material";


const Submit = () => {
  const [title, setTitle] = useState("");
  // const
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [recipeData, setRecipeData] = useState({});

  const handleAddIngredient = () => {
    setIngredients((prev) => ([...prev, {
      name: "",
      quantity: "",
      quantifier: "",
    }]));
  };

  const handleDeleteIngredient = (index) => {
    // console.log('index', index);
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
    // console.log(newIngredients);
  };

  const handleAddInstruction = () => {
    setInstructions((prev) => ([...prev, {
      title: "",
      contents: "",
    }]));
  };

  const handleDeleteInstruction = (index) => {
      const newInstructions = [...instructions];
      newInstructions.splice(index, 1);
      setInstructions(newInstructions);
  };

  const handleTitleChange = (evt) => {
    const newTitle = evt.target.value;
    setTitle(newTitle);
    // console.log(newTitle);
  }

  const handleIngredChange = (evt, idx, field) => {
    let newIngreds = [...ingredients];
    newIngreds[idx][field] = evt.target.value;
    setIngredients(newIngreds);
    // console.log(newIngreds);
  }

  const handleInsChange = (evt, idx, field) => {
    let newInsts = [...instructions];
    newInsts[idx][field] = evt.target.value;
    setInstructions(newInsts);
    console.log(newInsts);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

  }

  useEffect(() => {
    const ingredList = ingredients.map((ing) => ing.quantity+' '+ing.quantifier+' '+ing.name);
    const instList = instructions.map((ins) => {
      return {
        title: ins.title,
        contents: ins.contents.split("\n")
      };
    })
    let newRecipeData = {
      title: title,
      ingredients: ingredList,
      instructions: instList
    };

    console.log(newRecipeData);
    setRecipeData(newRecipeData);
  }, [title, ingredients, instructions]);


  return (
    <Layout>
      <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", mb: 4 }} >
        <Typography variant="h3">Share your recipe!</Typography>
      </Container>
      <form onSubmit={handleSubmit}>
        <Card sx={{ backgroundColor: "#fffcfa" }}>
          <CardHeader
            subheader="Fields with * are required"
            title="Recipe"
          />

          <Divider />

          <CardContent>
            <Container maxWidth="md" >
              <Typography variant="h5">Title</Typography>
              <TextField fullWidth
                required
                id="outlined-required"
                label="Recipe Title"
                placeholder="Ex. Strawberry Cake"
                margin="normal"
                autoFocus={true}
                onChange={handleTitleChange}
              />
            </Container>

            <Divider sx={{ my: 2 }}/>

            <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", rowGap: "5px" }} >
              <Typography variant="h5" sx={{ mb: 2 }} >Ingredients</Typography>
              {ingredients.map((ingredient, index) => {
                return (
                  <Grid key={'ing'+index} container spacing={1}>
                    <IngredientInput
                      ing={ingredient}
                      handleIngredChange={handleIngredChange}
                      index={index}
                    />
                    <Grid item xs={1} display="flex" alignItems="center">
                      <IconButton key={"button" + index} aria-label="cancel" onClick={() => {handleDeleteIngredient(index);}}>
                        <CancelIcon key={"cancel" + index} />
                      </IconButton>
                    </Grid>
                  </Grid>

                )
              })}
              <Button color="primary" variant="contained" sx={{ width: "80px" }} onClick={handleAddIngredient}>
                <AddIcon/>
              </Button>
            </Container>

            <Divider sx={{ my: 2 }}/>

            <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", rowGap: "15px" }} >
              <Typography variant="h5" sx={{ mb: 2 }}>Instructions</Typography>
              {instructions.map((ins, index) => {
                return (
                  <Grid key={'ins'+index} container spacing={1}>
                    <InstructionInput
                      ins={ins}
                      index={index}
                      handleInsChange={handleInsChange}
                    />
                    <Grid item xs={1} display="flex" alignItems="center">
                      <IconButton key={"button" + index} aria-label="cancel" onClick={() => {handleDeleteInstruction(index);}}>
                        <CancelIcon key={"cancel" + index} />
                      </IconButton>
                    </Grid>
                  </Grid>
                )
              })}

              <Button color="primary" variant="contained" sx={{ width: "80px" }} onClick={handleAddInstruction}>
                <AddIcon />
              </Button>
            </Container>

          </CardContent>
        </Card>

        <Container maxWidth="sm" sx={{ py: 3 }}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
          >
            Submit
          </Button>
        </Container>
      </form>
    </Layout>
  );

};

export default Submit;