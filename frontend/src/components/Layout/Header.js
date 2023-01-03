import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { UserContext } from "../../containers/App";
import { useContext } from "react";


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

  const { UserData, handleLogout, handleSignUp } = useContext(UserContext);

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
            onClick={() => { navigate(`/user/${UserData.username}/submit`) }}
            sx={{ fontSize: 20, color: 'inherit', display: 'block', px: 3 }}
          >
            {"Submit"}
          </Button>
          <Button
            key={"Home"}
            onClick={() => { navigate(`/user/${UserData.username}/search`) }}
            sx={{ fontSize: 20, color: 'inherit', display: 'block', px: 3}}
          >
            {"Home"}
          </Button>

          <Button
            key={"Log Out"}
            onClick={handleLogout}
            sx={{ fontSize: 20, color: 'inherit', display: 'block', px: 3}}
          >
            {"Log Out"}
          </Button>

          <Button
            key={"Sign Up"}
            onClick={handleSignUp}
            sx={{ fontSize: 20, color: 'inherit', display: 'block', px: 3}}
          >
            {"Sign Up"}
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;