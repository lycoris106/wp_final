import { useEffect } from "react";
import { createContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route, Navigate } from "react-router-dom";

import useUser from "../hooks/useUser";

import Search from './Search';
import Result from './Result';
import Detail from "./Detail";
import Submit from "./Submit";
import Login from "./Login";
import SignUp from "./SignUp";

import PrivateRoute from "../components/PrivateRoute";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#DF1070",
    },
    secondary: {
      main: "#6125c5",
    },
    // background: {
    //   paper: "#303030",
    //   default: "#303030",
    // },
  },
  typography: {
    fontFamily:  'Raleway, sans-serif'
  }
});

const UserContext = createContext();

function App() {
  const {
    UserData,
    setUserData,
    handleLogout,
    handleSignUp,
  } = useUser();

  return (
    <UserContext.Provider
      value={{
        UserData,
        setUserData,
        handleLogout,
        handleSignUp,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>

          <Route exact path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          { /* Homepage / Search page */ }
          <Route path="/user/:username/search" element={<PrivateRoute authed={UserData.signed} component={Search}/>} />
          { /* Page for showing search results */ }
          <Route path="/user/:username/result" element={<PrivateRoute authed={UserData.signed} component={Result}/>} />
          { /* Page for testing Detail.js */}
          <Route path="/user/:username/detail/:id" element={<PrivateRoute authed={UserData.signed} component={Detail}/>} />
          { /* Page for testing Submit.js */ }
          <Route path="/user/:username/submit" element={<PrivateRoute authed={UserData.signed} component={Submit}/>} />
          { /* Page for testing Login.js */ }



          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />


        </Routes>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export { App, UserContext };