import { useContext, useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import IngredientInput from "../components/Submit/IngredientInput";
import InstructionInput from "../components/Submit/InstructionInput";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  TextField,
  Paper,
  Container,
  Divider,
  Typography,
  IconButton,
  Button,
  Autocomplete,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Snackbar
} from "@mui/material";

import { UserContext } from "./App";

import { useMutation } from '@apollo/client';
import {
  CREATE_RECIPE_MUTATION,
  UPDATE_USER_MUTATION
} from '../graphql/mutations';

import tagsData from '../json/tags.json';

const allTags = [];
Object.values(tagsData).forEach((l) => {
  // allTags.push(...l);
  l.forEach((li) => {
    allTags.push({
      label: li
    });
  })

})



const Submit = () => {
  const { UserData, setUserData } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [tags, setTags] = useState([]);
  const [recipeData, setRecipeData] = useState({});

  const [createRecipe] = useMutation(CREATE_RECIPE_MUTATION);
  const [updateUser] = useMutation(UPDATE_USER_MUTATION);

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  // console.log(allTags);

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

  const handleAddTag = () => {
    setTags((prev) => ([...prev, ""]))
  }

  const handleDeleteTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  }

  const handleTitleChange = (evt) => {
    const newTitle = evt.target.value;
    setTitle(newTitle);
    // console.log(newTitle);
  }

  const handleUrlChange = (evt) => {
    const newUrl = evt.target.value;
    setUrl(newUrl);
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
    // console.log(newInsts);
  }

  const handleTagChange = (evt, newValue, idx) => {
    let newTags = [...tags];
    newTags[idx] = newValue;
    setTags(newTags);
    // console.log(newTags);
  }

  const handleSubmit = async (evt) => {
    const ingredList = ingredients.map((ing) => {
      return { content: ing.quantity+' '+ing.quantifier+' '+ing.name };
    });
    const instList = instructions.map((ins) => {
      return {
        title: ins.title,
        contents: ins.contents.split("\n")
      };
    });

    const tagList = tags.filter((tag) => tag).map((tag) => {
      return tag.label;
    });

    const myRecipeData = {
      title: title,
      image_url: url,
      tags: tagList,
      ingredients: ingredList,
      instructions: instList
    };



    evt.preventDefault();
    myRecipeData.tags.push(`Created by ${UserData.username}`);
    console.log(myRecipeData);
    console.log('before createRecipe')
    const submitPayLoad = await createRecipe({
      variables: {
        input: myRecipeData
      },
    });

    let newRecipeIds = [...UserData.recipeIds, submitPayLoad.data.createRecipe.id];
    setUserData((prev) => ({...prev, recipeIds: newRecipeIds}));
    console.log('before updateUser')
    await updateUser({
      variables: {
        input: {
          token: "token",
          name: UserData.username,
          contribution: submitPayLoad.data.createRecipe.id,
        }
      }
    });
    console.log('after updateUser')

    setTitle('');
    setUrl('');
    setIngredients([]);
    setInstructions([]);
    setTags([]);

    setOpen(true);
  }



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
                value={title}
                id="outlined-required"
                label="Recipe Title"
                placeholder="Ex. Strawberry Cake"
                margin="normal"
                autoFocus={true}
                onChange={handleTitleChange}
              />
            </Container>

            <Divider sx={{ my: 2 }}/>

            <Container maxWidth="md" >
              <Typography variant="h5">Image URL</Typography>
              <TextField fullWidth
                value={url}
                id="outlined-basic"
                label="Reference Image URL"
                placeholder="Ex. http://imgur.com/123456"
                margin="normal"
                autoFocus={true}
                onChange={handleUrlChange}
              />
            </Container>

            <Divider sx={{ my: 2 }}/>

            <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", rowGap: "5px" }} >
              <Typography variant="h5" sx={{ mb: 1 }} >Ingredients</Typography>
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
              <Typography variant="h5" sx={{ mb: 1 }}>Instructions</Typography>
              {
                instructions.map((ins, index) => {
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
                  );
              })}

              <Button color="primary" variant="contained" sx={{ width: "80px" }} onClick={handleAddInstruction}>
                <AddIcon />
              </Button>
            </Container>

            <Divider sx={{ my: 2 }}/>

            <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", rowGap: "15px" }} >
              <Typography variant="h5" sx={{ mb: 1 }}>Tags</Typography>
              {
                tags.map((tag, index) => {
                  return (
                    <Grid container spacing={1} key={'tag'+index}>
                      <Grid item xs={3}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-tag"
                        options={allTags}
                        getOptionLabel={(option) => (option ? option.label : "")}
                        renderInput={params => (
                          <TextField
                            required
                            id="outlined-required"
                            {...params}
                            label="Tag"
                            variant="outlined"
                            fullWidth
                          />
                        )}
                        sx={{ width: 200 }}
                        value={tag}
                        onChange={(evt, newValue) => {handleTagChange(evt, newValue, index)}}
                      />
                      </Grid>
                      <Grid item xs={1} display="flex" alignItems="center">
                        <IconButton aria-label="cancel" onClick={() => {handleDeleteTag(index);}}>
                          <CancelIcon/>
                        </IconButton>
                      </Grid>
                    </Grid>

                  );
                })
              }
              <Button color="primary" variant="contained" sx={{ width: "80px" }} onClick={handleAddTag}>
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
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Recipe submited"
        action={action}
      />
    </Layout>
  );

};

export default Submit;