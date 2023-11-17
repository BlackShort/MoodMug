import React, { useContext, useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Sound } from "./";
import { AccountMenu } from "../Pages";
import User from "../assets/user (2).png";
import { SearchRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { MusicContextAPI } from "../utils/MusicContextAPI";

const Navbar = ({ name }) => {

  const { setSelectMood } = useContext(MusicContextAPI);
  const [userImg, setUserImg] = useState(true);
  const [searchTerm, setSearchTerm] = useState();

  const SearchSong = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setSelectMood(searchTerm);
    }
    setSelectMood("");
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "7vh",
        background: "#46474b",
        padding: "0.3em 1em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: "0.3em",
        }}
      >
        <Link to={"/"}>
          <Typography variant="h5" fontSize={"1.8rem"}>
            {name}
          </Typography>
          <Sound />
        </Link>
      </Box>
      <Paper
        component="form"
        onSubmit={SearchSong}
        sx={{
          width: "35%",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: "0.5em",
          border: "1px solid #9b9b9b",
          borderRadius: "0.2em",
          overflow: "hidden",
          background:'transparent'
        }}
      >
        <input
          style={{
            border: "none",
            outline: "none",
            background: "#46474b",
            width: "-webkit-fill-available",
            height: "-webkit-fill-available",
            fontSize: "1rem",
            color: "#ffffff",
            padding: "0.3em 0.5em",
            letterSpacing: "0.5px",
          }}
          type="text"
          placeholder="search your moods music"
          name=""
          id=""
          spellCheck={false}
          maxLength={50}
          minLength={1}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span
          style={{
            padding: "0.3em 0",
            cursor: "pointer",
            background: "#252525",
            height: "100%",
            width: "2.5em",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <SearchRounded />
        </span>
      </Paper>
      <Box
        sx={
          {
            // overflow: 'hidden',
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "space-between",
            // flexDirection: "row",
            // gap: "1em",
            // border: '1px solid #c3c3c3',
            // borderRadius: "50%",
            // width: '2em',
            // height: '2em',
            // cursor: 'pointer'
          }
        }
      >
        {userImg ? (
          <AccountMenu />
        ) : (
          <img
            src={User}
            alt="Account"
            style={{
              padding: "1px",
              width: "-webkit-fill-available",
              objectFit: "contain",
            }}
          />
        )}
      </Box>
    </Stack>
  );
};

export default Navbar;
