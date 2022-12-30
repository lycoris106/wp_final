import { useContext, useEffect } from "react";
import Layout from "../components/Layout/Layout.js";
import InstructList from "../components/InstructList.js";
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
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Chip
} from "@mui/material";

import CheckIcon from '@mui/icons-material/Check';

const StyledPaper = styled(Paper, {
  shouldForwardProp: (props) => props !== 'bgColor',
})(({theme, ...props}) => {
  console.log(props);
  return {
    backgroundColor: props.bgColor,
    padding: 10,
    marginBottom: 30
  };
});

const Detail = () => {

  const title = "Chocolate"
  const ingredList = ["100 grams of choocolate", "some sugar", "100 ml of milk"]
  const imgURL = require("../devFiles/img/4405dc8988.jpg");
  const instructions = ["Melt the chocolate", "Add milk and sugar", "..."];

  return (
    <Layout>
      <Grid container spacing={1}>
        <Grid item xs={8}>
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
        <Grid item xs={4}>
          <StyledPaper elevation={2} bgColor={'default'}>
            <Chip label={'Customized'}
              color={"primary"} sx={{ m: 0.6 }}
            />
            {/* <Typography align="center" variant="h5" color="primary" gutterBottom>
              Customized
            </Typography> */}
          </StyledPaper>
          <StyledPaper elevation={2} bgColor={'#f5f5f5'}>
            <Typography align="center" variant="h5" gutterBottom>
              Ingredient List
            </Typography>
            <Divider />
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon sx={{ color: "orange" }}/>
                </ListItemIcon>
                <ListItemText primary={ingredList[0]} />
              </ListItem>
              <ListItem>
                <ListItemText inset primary={ingredList[1]} />
              </ListItem>
            </List>
          </StyledPaper>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ mt: 3 }}>
            <InstructList instructions={instructions} />
          </Box>
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