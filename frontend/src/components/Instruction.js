import { Container, Typography } from "@mui/material";

export default function Instruction( { index, instruction } ) {
    return (
        <Container key={index} maxWidth="md" sx={{ display: "flex", flexDirection: "column", rowGap: "0.5em" }}>
            <Typography key={"step" + String(index)} variant="h4">Step{index + 1}</Typography>
            <Typography key={"instuction" + String(index)} variant="h5">{instruction}</Typography>
        </Container>
    )
};