// import { VolumeDown, VolumeUp } from '@mui/icons-material'
// import { FavoriteBorderRoundedIcon, LoopRounded, FavoriteRoundedIcon, PauseRoundedIcon, PlayArrowRoundedIcon, SkipNextRoundedIcon, SkipPreviousRoundedIcon, pla } from '../Constants'
// import { Slider, Stack } from '@mui/material'
// import React, { useState } from 'react'

// const Player = () => {
//   const [Play, setPlay] = useState(false)
//   const [like, setlike] = useState(false)
//   const [rotate, setrotate] = useState(false)
//   return (
//     <Stack className='player' direction={'row'} sx={{ borderRadius: '0.3em', background: '#2d2d2d', width: '-webkit-fill-available', justifyContent: 'space-between', alignItems: 'center', padding: '1em 1.5em', }}>

// {rotate ?
//   <LoopRounded sx={{ rotate: '90deg' }} onClick={() => setrotate(!rotate)} />
//   :
//   <LoopRounded onClick={() => setrotate(!rotate)} />
// }
//       <SkipNextRoundedIcon />

//       {
//         Play ?
//           <PauseRoundedIcon onClick={() => setPlay(!Play)} />
//           :
//           <PlayArrowRoundedIcon onClick={() => setPlay(!Play)} />
//       }

//       <SkipNextRoundedIcon />

//       {like ?
//         <FavoriteRoundedIcon onClick={() => setlike(!like)} />
//         :
//         <FavoriteBorderRoundedIcon onClick={() => setlike(!like)} />
//       }

//       <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
//         <VolumeDown />
//         <Slider aria-label="Volume" value={'20'} onChange={() => {}} />
//         <VolumeUp />
//       </Stack>

//     </Stack>
//   )
// }

// export default Player
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import {
  FavoriteBorderRoundedIcon,
  LoopRounded,
  FavoriteRoundedIcon,
  ThumbUpRoundedIcon,
  ThumbDownRoundedIcon,
} from "../Constants";
import { useState } from "react";

import SongImg from '../assets/7.png';
import { Link } from "react-router-dom";

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 10,
  margin: "auto",
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgb(213 213 213 / 19%)",
  backdropFilter: "blur(40px)",
}));

const CoverImage = styled("div")({
  width: 75,
  height: 75,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
  color: '#fff'
});

export default function MusicPlayerSlider() {
  const [like, setlike] = useState(false);
  const [rotate, setrotate] = useState(false);
  const [fav, setFav] = useState(false);


  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(true);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#fff";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
      }}
    >
      <Widget
        sx={{
          display: "flex",
          width: "-webkit-fill-available",
          height: "-webkit-fill-available",
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "25%" }}>
          <CoverImage>
            <img
              alt="can't win - Chilling Sunday"
              src={SongImg}
              style={{ objectFit: 'fill', width: '-webkit-fill-available', height: '-webkit-fill-available' }}
            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography noWrap letterSpacing={-0.25}>
              Chilling Sunday &mdash;
            </Typography>
            <Typography
              variant="caption"
              fontWeight={500}
            >
              Jun Pulse
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: "45%" }}>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value)}
            sx={{
              color:
                theme.palette.mode === "dark" ? "#fff" : "#fff",
              height: 4,
              "& .MuiSlider-thumb": {
                width: 8,
                height: 8,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 8px ${theme.palette.mode === "dark"
                    ? "rgb(255 255 255 / 16%)"
                    : "rgb(0 0 0 / 16%)"
                    }`,
                },
                "&.Mui-active": {
                  width: 20,
                  height: 20,
                },
              },
              "& .MuiSlider-rail": {
                opacity: 0.28,
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: -1
            }}
          >
            <TinyText>{formatDuration(position)}</TinyText>
            <TinyText>-{formatDuration(duration - position)}</TinyText>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: '2.5rem'
            }}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton
              aria-label={paused ? "play" : "pause"}
              onClick={() => setPaused(!paused)}
            >
              {paused ? (
                <PlayArrowRounded
                  sx={{ fontSize: "3rem" }}
                  htmlColor={mainIconColor}
                />
              ) : (
                <PauseRounded
                  sx={{ fontSize: "3rem" }}
                  htmlColor={mainIconColor}
                />
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", width: "20%", justifyContent: 'space-between', padding: '0 1em' }}
          spacing={2}
        >
          <Box sx={{ width: "-webkit-fill-available", display: "flex", justifyContent: 'space-between', alignItems: "center", gap: '1.5em' }}>
            <ThumbUpRoundedIcon sx={{ fontSize: "1.7rem" }} />
            {like ? (
              <FavoriteRoundedIcon sx={{ fontSize: "1.7rem" }} onClick={() => setlike(!like)} />
            ) : (
              <FavoriteBorderRoundedIcon sx={{ fontSize: "1.7rem" }} onClick={() => setlike(!like)} />
            )}
            {rotate ?
              <LoopRounded sx={{ rotate: '90deg', fontSize: "1.7rem" }} onClick={() => setrotate(!rotate)} />
              :
              <LoopRounded sx={{ fontSize: "1.7rem" }} onClick={() => setrotate(!rotate)} />
            }
            <ThumbDownRoundedIcon sx={{ fontSize: "1.7rem" }} />

          </Box>
          <Box sx={{ width: "-webkit-fill-available", display: "flex", alignItems: 'center', gap: '1em' }}>
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider
              aria-label="Volume"
              defaultValue={30}
              sx={{
                color:
                  theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
                "& .MuiSlider-track": {
                  border: "none",
                },
                "& .MuiSlider-thumb": {
                  width: 18,
                  height: 18,
                  backgroundColor: "#fff",
                  "&:before": {
                    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    boxShadow: "none",
                  },
                },
              }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
          </Box>
        </Box>
      </Widget>
    </Box>
  );
}
