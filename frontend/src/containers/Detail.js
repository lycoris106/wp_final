import { useContext, useEffect } from "react";
import Layout from "../components/Layout/Layout.js";
import Instruction from "../components/Instruction.js";
import { Box, Container, Typography, CardMedia } from "@mui/material";

const Detail = () => {
  const title = "Chocolate"
  const imgURL = require("../devFiles/img/4405dc8988.jpg");
  const instructions = ["Melt the chocolate", "..."];
  return (
    <Layout>
      { /* todo */ }
      <Container  sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }} >
      <Container maxWidth="md" sx={{
        display: 'flex',
        justifyContent: "space-between",
        alignContent: "center",
        maxHeight: "10vh",
         }}>
        <Typography variant="h3" component="div" align="center" sx={{ textAlign: "center" }}>
            {title}
          </Typography>
          <Typography variant="h5" component="div" align="center">
            {"Customized?"}
          </Typography>
      </Container>
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: "space-between" }}>
        <CardMedia component="img" image={imgURL} sx={{ maxWidth: "50%" }}/>
        <Typography variant="h5" component="div">other infomations</Typography>
      </Container>
      <Container sx={{ display: "flex", flexDirection: "column", rowGap: "1em"}}>
        {instructions.map((ins, index) => (
          <Instruction instruction={ins} index={index} />
        ))}
      </Container>
      </Container>
    </Layout>
  );
}

export default Detail;