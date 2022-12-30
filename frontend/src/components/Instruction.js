import { Container, Typography } from "@mui/material";

export default function Instruction( { index, instruction } ) {
    return (
        <Container key={"container" + index} sx={{ display: "flex", flexDirection: "column", rowGap: "0.5em" }}>
            <Typography key={"step" + index} variant="h4">Step{index + 1}</Typography>
            <Typography key={"instuction" + index} variant="h5">{instruction}</Typography>
        </Container>
    )
};