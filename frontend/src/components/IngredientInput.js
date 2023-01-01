import {
  Container,
  TextField,
  Grid,
  IconButton,
} from "@mui/material";

import CancelIcon from '@mui/icons-material/Cancel';

export default function IngredientInput ( {index, handleIngredChange, ing} ) {
  return (
    <>
      <Grid item xs={5}>
        <TextField fullWidth
          value={ing.name}
          required key={"Name" + index} id="outlined-required" label="Name" placeholder="Ex. milk"
          onChange={(e) => {handleIngredChange(e, index, "name")}}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth
          value={ing.quantity}
          key={"Quantity" + index} id="outlined-basic" label="Quantity" placeholder="Ex. 300"
          onChange={(e) => {handleIngredChange(e, index, "quantity")}}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth
          value={ing.quantifier}
          key={"Quantifier" + index} id="outlined-basic" label="Quantifier" placeholder="Ex. ml"
          onChange={(e) => {handleIngredChange(e, index, "quantifier")}}
        />
      </Grid>
    </>
  );
};