import { useEffect } from "react";
import { createContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route, Navigate } from "react-router-dom";

import Search from './Search';
import Result from './Result';

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


        <Route path="/" element={<Navigate to="/search" />} />
      </Routes>
    </ThemeProvider>
  );
}

export { App };