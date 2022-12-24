import { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

const Layout = (props) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <Header/>
      <Box
        sx={{
          flexGrow: 1, height: '100vh', // overflow: 'auto',  // 只有Box會有滾輪
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 8, minHeight:'65vh', }}>
          {props.children}
        </Container>
        {/* <Footer/> */}
      </Box>
    </Box>
  )

}

export default Layout