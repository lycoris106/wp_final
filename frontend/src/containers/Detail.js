import { useContext, useEffect } from "react";
import Layout from "../components/Layout/Layout.js";
import Instruction from "../components/Instruction.js";
import { Paper, Container, Typography, CardMedia, Divider } from "@mui/material";

const Detail = () => {
  const title = "Chocolate"
  const imgURL = require("../devFiles/img/4405dc8988.jpg");
  const instructions = ["Melt the chocolate", "..."];
  return (
    <Layout>
      <Paper  sx={{ display: "flex", flexDirection: "column", rowGap: "10px", bgcolor: "#fcf9f4", borderRadius: "16px" }} >
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
      <Divider variant="middle" />
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: "space-between" }}>
        <CardMedia component="img" image={imgURL} sx={{ maxWidth: "50%" }}/>
        <Typography variant="h5" component="div">other infomations</Typography>
      </Container>
      <Divider variant="middle" />
      <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", rowGap: "1em"}}>
        {instructions.map((ins, index) => (
          <Instruction key={index} instruction={ins} index={index} />
        ))}
      </Container>
      </Paper>
    </Layout>
  );
}

export default Detail;