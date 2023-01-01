import { useState } from "react";
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


const Submit = () => {
  const [ ingredients, setIngredients ] = useState([]);
  const [ instructions, setInstructions ] = useState([]);

  const handleAddIngredient = () => {
    setIngredients((prev) => ([...prev, {
      name: "",
      number: "",
      quantifier: "",
      }]));
  };

  const handleDeleteIngredient = (index) => {
    const newIngredients = [...ingredients];
      newIngredients.splice(index, 1);
      setIngredients(newIngredients);
  };

  const handleAddInstruction = () => {
    setInstructions((prev) => ([...prev, {
      content: "",
      }]));
  };

  const handleDeleteInstruction = (index) => {
      const newInstructions = [...instructions];
      newInstructions.splice(index, 1);
      setInstructions(newInstructions);
  };

  return (
    <Layout>
      <Paper  sx={{ display: "flex", flexDirection: "column", rowGap: "10px", bgcolor: "#fcf9f4", borderRadius: "16px", padding: "20px" }} >
        <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center" }} >
          <Typography variant="h3">Share your recipe!</Typography>
        </Container>
        <Container maxWidth="md" >
          <Typography variant="h5">Title</Typography>
          <TextField fullWidth
            id="outlined-basic"
            placeholder="Recipe Title"
            margin="normal"
            autoFocus={true} />
        </Container>
        <Divider variant="middle" />
        <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", rowGap: "5px" }} >
          <Typography variant="h5">Ingredients</Typography>
            {ingredients.map((ingredient, index) => {
              return (
                <Container key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                  <IngredientInput key={"Input" + index} index={index}/>
                  <IconButton key={"button" + index} aria-label="cancel" onClick={() => {handleDeleteIngredient(index);}}>
                    <CancelIcon key={"cancel" + index} />
                  </IconButton>
                </Container>
              )
            })}
          <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center" }} >
            <Fab color="primary" onClick={handleAddIngredient}>
              <AddIcon />
            </Fab>
          </Container>
        </Container>
        <Divider variant="middle" />
        <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", rowGap: "15px" }} >
          <Typography variant="h5" >Instructions</Typography>
          {instructions.map((ins, index) => {
            return (
              <Container key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <InstructionInput key={"ins" + index} index={index} handleDeleteInstruction={handleAddIngredient}/>
                <IconButton key={"cancelIns" + index} aria-label="cancel" onClick={() => {handleDeleteInstruction(index);}} >
                  <CancelIcon />
                </IconButton>
              </Container>
            );
          })}
          <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center" }} >
            <Fab color="primary" onClick={handleAddInstruction}>
              <AddIcon />
            </Fab>
          </Container>
        </Container>
        <Container maxWidth="sm">
          <Button fullWidth variant="contained" size="large" >Submit</Button>
        </Container>

      </Paper>

    </Layout>
  );
};

export default Submit;