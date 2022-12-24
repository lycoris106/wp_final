import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import Layout from "../components/Layout/Layout";

const Search = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Box sx={{ display: "flex" }}>
        Todo
      </Box>
    </Layout>
  );
}

export default Search;