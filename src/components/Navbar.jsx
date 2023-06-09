import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../Utils/constant";
import {SearchBar} from "./";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      backgroundColor: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" sx={{display:'flex' , alignItems:'center'}}>
      <img src={logo} alt="logo" height={45}/>
    </Link>
    <SearchBar/>
  </Stack>
);

export default Navbar;
