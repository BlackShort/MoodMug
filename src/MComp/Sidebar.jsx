import React from "react";
import { Button, Stack } from "@mui/material";
import {
  HomeRoundedIcon,
  SearchRoundedIcon,
  SettingsRoundedIcon,
  ViewCarouselRoundedIcon,
} from "../Constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Stack
      className="Sidebar"
      sx={{
        borderRadius: "10px",
        width: "-webkit-fill-available",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: 'row', md: "column" },
        background: "#252525",
        padding: "1em 1em",
        gap: '1em'
      }}
    >
      <Link to={"/"}>
        <Button
          variant="outlined"
          style={{ color: "#fff", border: "1px solid gray" }}
          startIcon={<HomeRoundedIcon />}
        >
          Home
        </Button>
      </Link>
      <Link to={"/Search"}>
        <Button
          variant="outlined"
          style={{ color: "#fff", border: "1px solid gray" }}
          startIcon={<SearchRoundedIcon />}
        >
          Search
        </Button>
      </Link>
      <Link to={"/Library"}>
        <Button
          variant="outlined"
          style={{ color: "#fff", border: "1px solid gray" }}
          startIcon={<ViewCarouselRoundedIcon />}
        >
          Library
        </Button>
      </Link>


      <Stack justifyContent={'center'} sx={{ margin: { xs: '0', md: 'auto 0 0 0' } }}>
        <Link to={"/Setting"}>
          <Button
            variant="outlined"
            style={{ color: "#fff", border: "1px solid gray" }}
            startIcon={<SettingsRoundedIcon />}
          >
            Setting
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
