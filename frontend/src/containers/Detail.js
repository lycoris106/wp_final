import { useContext, useEffect } from "react";
import Layout from "../components/Layout/Layout.js";
import Instruction from "../components/Instruction.js";
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  CardMedia,
  Card,
  Grid,
  Paper,
  Divider,
  List,
  ListItem
} from "@mui/material";

const StyledPaper = styled(Paper)(({theme, ...props}) => {
  console.log(props);
  return {
    backgroundColor: '#f5f5f5',
    padding: 10
  };
});

const Detail = () => {

  const title = "Chocolate"
  const imgURL = require("../devFiles/img/4405dc8988.jpg");
  const instructions = ["Melt the chocolate", "..."];

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid xs={9}>
          <Card sx={{ width: 700, height:650 }}>
            <Typography gutterBottom variant="h3" component="div" align="center" sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <CardMedia
              component="img"
              image= {imgURL}
            />
          </Card>
        </Grid>
        <Grid xs={3}>
          <StyledPaper elevation={2} >
            <Typography variant="h5" gutterBottom>
              Ingredient List
            </Typography>
            <Divider />
            <List>
              <ListItem>item</ListItem>
            </List>
          </StyledPaper>
        </Grid>
      </Grid>
      {/* <Container  sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }} >
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
      </Container> */}
    </Layout>
  );
}

export default Detail;