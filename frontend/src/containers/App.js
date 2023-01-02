import { useEffect } from "react";
import { createContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route, Navigate } from "react-router-dom";

import Search from './Search';
import Result from './Result';
import Detail from "./Detail";
import Submit from "./Submit";
import Login from "./Login";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        { /* Homepage / Search page */ }
        <Route exact path="/search" element={<Search />} />
        { /* Page for showing search results */ }
        <Route path="/result" element={<Result />} />
        { /* Page for testing Detail.js */}
        <Route path="/detail/:id" element={<Detail />} />
        { /* Page for testing Submit.js */ }
        <Route path="/submit" element={<Submit />} />
        { /* Page for testing Login.js */ }
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Navigate to="/search" />} />
      </Routes>
    </ThemeProvider>
  );
}

export { App };