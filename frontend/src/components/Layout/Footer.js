import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <Box px={{ xs: 3, sm: 8 }}
      py={{ xs: 3, sm: 5 }}
      bgcolor="#DF1070"
      // color="white"
      component="footer"
      // sx={{
      //   // mt: 20,

      //   backgroundColor: (theme) =>
      //     theme.palette.mode === 'light'
      //       ? theme.palette.grey[200]
      //       : theme.palette.grey[800],
      // }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <Box>
              <Typography color="#f7f1ed">Web Programming 2022 Fall</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box color="#f7f1ed" borderBottom={1} sx={{mb: 1}}>Contact</Box>
            <Box>
              <Typography color="#f7f1ed">吳文皓 b08204037@ntu.edu.tw</Typography>
            </Box>
            <Box>
              <Typography color="#f7f1ed">郭承諺 b08902069@ntu.edu.tw</Typography>
            </Box>
            <Box>
              <Typography color="#f7f1ed">賴致甫 b08902024@ntu.edu.tw</Typography>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>

  );
}

export default Footer;