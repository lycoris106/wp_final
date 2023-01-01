import {
  Container,
  TextField,
  Grid,
} from "@mui/material";


export default function InstructionInput ({ index, ins, handleInsChange }) {
  return (
    <>
      <Grid item xs={3}>
        <TextField
          fullWidth value={ins.title} key={"Subtitle" + index} id="outlined-basic" label="Subtitle" placeholder="Ex. Prepare the batter"
          onChange={(e) => {handleInsChange(e, index, "title")}}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          required
          key={"text" + index}
          value={ins.contents}
          id="outlined-multiline-required"
          multiline
          rows={3}
          label={"Step " + (index + 1)}
          placeholder={"Instruction"}
          onChange={(e) => {handleInsChange(e, index, "contents")}}
        />
      </Grid>
    </>
  );
};