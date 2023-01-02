import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position='absolute' open={false}>
      <Toolbar sx={{ pr: '24px' }}>
        {/* Header text */}
        <Typography
          variant="h5" sx={{ flexGrow: 1 }}
          color="inherit"
        >
          Recipe from Fridge
        </Typography>

        {/* Router Button */}
        <Box sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex' } }}>
          <Button
            key={"Submit"}
            onClick={() => { navigate(`/submit`) }}
            sx={{ fontSize: 20, color: 'inherit', display: 'block', px: 3 }}
          >
            {"Submit"}
          </Button>
          <Button
            key={"Home"}
            onClick={() => { navigate(`/search`) }}
            sx={{ fontSize: 20, color: 'inherit', display: 'block', px: 3}}
          >
            {"Home"}
          </Button>

          {/* <Button
            key={"About"}
            onClick={() => { navigate(`/login/${UserData.username}/about`) }}
            sx={{ fontSize: 20, color: 'inherit', display: 'block' }}
          >
            {"About"}
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;