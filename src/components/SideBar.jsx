import { Stack } from "@mui/system";
import React from "react";
import { categories } from "../Utils/constant";

const SideBar = ({ selectedCategory, setselectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      flexDirection: { md: "column" },
      height: { sx: "auto", md: "95%" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          backgroundColor: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        onClick={() => setselectedCategory(category.name)}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? 1 : 0.8,
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);
export default SideBar;
