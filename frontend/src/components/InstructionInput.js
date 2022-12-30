import { Container, TextField } from "@mui/material";


export default function InstructionInput ({ index, instruction }) {
    return (
        <Container key={"container" + index} sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
                fullWidth
                key={"text" + index}
                id="outlined-multiline-static"
                multiline
                rows={3}
                label={"Step " + (index + 1)}
                placeholder={"Instruction"}
            />
        </Container>
    );
};