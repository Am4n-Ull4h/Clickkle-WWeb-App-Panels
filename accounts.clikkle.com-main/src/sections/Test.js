import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Test = () => {
  const [age, setAge] = useState("Month");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "lightgray",
        height: "100dvh",
      }}
    >
      {/* <Button
        aria-controls="links-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Show Links
      </Button>
      <Menu
        id="links-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="https://example.com" target="_blank" rel="noopener">
            Link 1
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="https://example.com" target="_blank" rel="noopener">
            Link 2
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="https://example.com" target="_blank" rel="noopener">
            Link 3
          </Link>
        </MenuItem>
      </Menu> */}
      <div>
        <FormControl
          variant="filled"
          style={{
            backgroundColor: "gray",
            width: "100%",
            borderBottom: "none",
            borderRadius: "5px",
            textAlign: "left",
            color: "white",
          }}
        >
          <Select
            value={age}
            onChange={handleChange}
            style={{ color: "white" }}
            displayEmpty
          >
            <MenuItem value="Month" disabled>
              {age === "Month" ? "Month" : "Month"}
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
export default Test;
