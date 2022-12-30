import { Container, TextField } from "@mui/material";

export default function IngredientInput ( {index, name, number, quantifier} ) {
    return (
        <Container key={"container" + index} sx={{ display: "flex", justifyContent: "space-between" }} >
            <TextField key={"Name" + index} id="outlined-basic" placeholder="Name" />
            <TextField key={"Number" + index} id="outlined-basic" placeholder="Number" />
            <TextField key={"Quantifier" + index} id="outlined-basic" placeholder="Quantifier" />
        </Container>
    );
};