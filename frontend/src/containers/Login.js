import {
  Grid,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  Zoom,
  Alert
} from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useState, useRef, useEffect, useContext } from "react";
import { useMutation } from '@apollo/client';
import { UserContext } from "./App";
import { LOGIN_MUTATION } from "../graphql/mutations";

const Login = () => {
  const { UserData, setUserData } = useContext(UserContext);

  const [ LoginMutation ] = useMutation(LOGIN_MUTATION);

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ timer, setTimer] = useState(0);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "error",
  });
  const [ error, setError ] = useState({
    username: false,
    password: false,
    usernameHelperText: "",
    passwordHelperText: "",
  });
  const errorRef = useRef({
    username: false,
    password: false,
    usernameHelperText: "",
    passwordHelperText: "",
  });

  // Timer to close Alert
  const reset = () => {
    setTimer(0);
    setAlert({
      ...alert,
      open: false,
    })
  };
  useEffect(() => {
    let interval = null;
    if (alert.open && timer <= 2) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    } else if (!alert.open && timer !== 0) {
      clearInterval(interval);
    } else if (timer > 2) {
      reset();
    }
    return () => clearInterval(interval);
  }, [alert.open, timer]);

  // 已登入者進到Login Page會自動被導向Search Page
  useEffect(() => {
    if (UserData.signed) {
      navigate(`/login/${UserData.username}/search`);
    }
  });

  // Sign in
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      errorRef.current = {
        username: false,
        password: false,
        usernameHelperText: "",
        passwordHelperText: "",
      }
      setError(errorRef.current);
      // LoginMutation
      const signInPayLoad = await LoginMutation({
        variables: {
          data: {
            name: username,
            password: password,
          },
        },
      });

      if (signInPayLoad.data.loginUser.ok) {
        let recipeList = [];
        if (signInPayLoad.data.loginUser.user.recipeIds !== null) {
          recipeList = [...signInPayLoad.data.loginUser.user.recipeIds]
          setUserData({
            username: username,
            password: password,
            recipeIds: recipeList,
            signed: true,
          });
        } else {
          setUserData({
            username: username,
            password: password,
            scores: [],
            signed: true,
          });
        }
        navigate(`/user/${username}/search`);
      } else {
        setAlert({
          open: true,
          message: signInPayLoad.data.loginUser.error,
          severity: "error",
        });
        setUsername("");
        setPassword("");
      }

      console.log(username + "  " + password);
      // Login Error Example
      if (username === "test") {
        setAlert({
          open: true,
          message: "error message test",
          severity: "error",
        });
        setUsername("");
        setPassword("");
      };
    } else {
      // Handle blank input
      if (!username) {
        errorRef.current = {
          ...errorRef.current,
          username: true,
          usernameHelperText: "Required",
        };
      } else {
        errorRef.current.username = false;
      }
      if (!password) {
        errorRef.current = {
          ...errorRef.current,
          password: true,
          passwordHelperText: "Required",
        };
      } else {
        errorRef.current.password = false;
      }
      setError(errorRef.current);
      console.log(error);
    };
  };
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <AccountCircleRoundedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Zoom in={alert.open}>
              <Alert severity={alert.severity}>{alert.message}</Alert>
            </Zoom>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="User Name"
                autoFocus
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                autoComplete="off"
                value={username}
                error={error.username}
                helperText={error.usernameHelperText}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                error={error.password}
                helperText={error.passwordHelperText}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    component="button"
                    onClick={() => navigate(`/signup`)}
                    underline="hover"
                    variant="body2"
                  >
                    {"Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
    </Grid>
  );
};

export default Login;