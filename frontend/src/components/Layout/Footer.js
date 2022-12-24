import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link'

const Footer = () => {
  return (
    <Box px={{ xs: 3, sm: 8 }}
      py={{ xs: 3, sm: 5 }}
      bgcolor="text.secondary"
      color="white"
      component="footer"
      sx={{
        // mt: 20,

        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    />
  );
}

export default Footer;