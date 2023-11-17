// import * as React from "react";
// import SongImg from '../assets/7.png';
// import { useState } from "react";
// import { Box, Stack } from '@mui/material';
// import { Link } from "react-router-dom";
// import { styled, useTheme } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";
// import Slider from "@mui/material/Slider";
// import IconButton from "@mui/material/IconButton";
// import PauseRounded from "@mui/icons-material/PauseRounded";
// import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
// import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
// import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
// import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
// import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
// import {
//   FavoriteBorderRoundedIcon,
//   LoopRounded,
//   FavoriteRoundedIcon,
//   ThumbUpRoundedIcon,
//   ThumbDownRoundedIcon,
// } from "../Constants";
// import SongList from "./SongList";



// const Widget = styled("div")(({ theme }) => ({
//   padding: 16,
//   borderRadius: 10,
//   margin: "auto",
//   backgroundColor:
//     theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgb(213 213 213 / 19%)",
//   backdropFilter: "blur(40px)",
// }));

// const CoverImage = styled("div")({
//   width: 75,
//   height: 75,
//   objectFit: "cover",
//   overflow: "hidden",
//   flexShrink: 0,
//   borderRadius: 8,
//   backgroundColor: "rgba(0,0,0,0.08)",
//   "& > img": {
//     width: "100%",
//   },
// });

// const TinyText = styled(Typography)({
//   fontSize: "0.75rem",
//   opacity: 0.38,
//   fontWeight: 500,
//   letterSpacing: 0.2,
//   color: '#fff'
// });


// const MusicPlayer = () => {
//   const [like, setlike] = useState(false);
//   const [rotate, setrotate] = useState(false);
//   const [fav, setFav] = useState(false);


//   const theme = useTheme();
//   const duration = 200; // seconds
//   const [position, setPosition] = React.useState(32);
//   const [paused, setPaused] = React.useState(false);
//   function formatDuration(value) {
//     const minute = Math.floor(value / 60);
//     const secondLeft = value - minute * 60;
//     return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
//   }
//   const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#fff";
//   const lightIconColor =
//     theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

//   return (
//     <Stack direction={'row'}
//       height={{ xs: '100%', md: '100%' }}
//       width={'-webkit-fill-available'}
//       gap={"2em"}
//       sx={{
//         background: "#252525",
//         borderRadius: "10px",
//         padding: "1em",
//         overflow: 'hidden',
//         justifyContent: 'space-between'
//       }}
//     >

//       <Box sx={{ width: '25%', gap: '1em', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
//         <img
//           alt="can't win - Chilling Sunday"
//           src={SongImg}
//           style={{ objectFit: 'fill', width: '20em', height: '20em', borderRadius: '10px' }}
//         />
//         <Box sx={{ background: '#6f6f6f1c', borderRadius: '10px 10px 10px 10px', padding: '1em', width: "-webkit-fill-available", display: "flex", justifyContent: 'space-between', alignItems: "center", gap: '1.5em' }}>
//           <ThumbUpRoundedIcon sx={{ fontSize: "1.7rem" }} />
//           {like ? (
//             <FavoriteRoundedIcon sx={{ fontSize: "1.7rem" }} onClick={() => setlike(!like)} />
//           ) : (
//             <FavoriteBorderRoundedIcon sx={{ fontSize: "1.7rem" }} onClick={() => setlike(!like)} />
//           )}
//           {rotate ?
//             <LoopRounded sx={{ rotate: '90deg', fontSize: "1.7rem" }} onClick={() => setrotate(!rotate)} />
//             :
//             <LoopRounded sx={{ fontSize: "1.7rem" }} onClick={() => setrotate(!rotate)} />
//           }
//           <ThumbDownRoundedIcon sx={{ fontSize: "1.7rem" }} />

//         </Box>
//         <Box sx={{ background: '#6f6f6f1c', borderRadius: '10px 10px 10px 10px', padding: '1em', width: "-webkit-fill-available", display: "flex", alignItems: 'center', gap: '1em' }}>
//           <VolumeDownRounded htmlColor={lightIconColor} />
//           <Slider
//             aria-label="Volume"
//             defaultValue={30}
//             sx={{
//               color:
//                 theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
//               "& .MuiSlider-track": {
//                 border: "none",
//               },
//               "& .MuiSlider-thumb": {
//                 width: 18,
//                 height: 18,
//                 backgroundColor: "#fff",
//                 "&:before": {
//                   boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
//                 },
//                 "&:hover, &.Mui-focusVisible, &.Mui-active": {
//                   boxShadow: "none",
//                 },
//               },
//             }}
//           />
//           <VolumeUpRounded htmlColor={lightIconColor} />
//         </Box>
//       </Box>

//       <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
//         <Typography variant="h5">
//           Mokingbird
//         </Typography>
//         <Slider
//           aria-label="time-indicator"
//           size="small"
//           value={position}
//           min={0}
//           step={1}
//           max={duration}
//           onChange={(_, value) => setPosition(value)}
//           sx={{
//             color:
//               theme.palette.mode === "dark" ? "#fff" : "#fff",
//             height: 4,
//             "& .MuiSlider-thumb": {
//               width: 8,
//               height: 8,
//               transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
//               "&:before": {
//                 boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
//               },
//               "&:hover, &.Mui-focusVisible": {
//                 boxShadow: `0px 0px 0px 8px ${theme.palette.mode === "dark"
//                   ? "rgb(255 255 255 / 16%)"
//                   : "rgb(0 0 0 / 16%)"
//                   }`,
//               },
//               "&.Mui-active": {
//                 width: 20,
//                 height: 20,
//               },
//             },
//             "& .MuiSlider-rail": {
//               opacity: 0.28,
//             },
//           }}
//         />
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             mt: -1
//           }}
//         >
//           <TinyText>{formatDuration(position)}</TinyText>
//           <TinyText>-{formatDuration(duration - position)}</TinyText>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             height: '2.5rem'
//           }}
//         >
//           <IconButton aria-label="previous song">
//             <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
//           </IconButton>
//           <IconButton
//             aria-label={paused ? "play" : "pause"}
//             onClick={() => setPaused(!paused)}
//           >
//             {paused ? (
//               <PlayArrowRounded
//                 sx={{ fontSize: "3rem" }}
//                 htmlColor={mainIconColor}
//               />
//             ) : (
//               <PauseRounded
//                 sx={{ fontSize: "3rem" }}
//                 htmlColor={mainIconColor}
//               />
//             )}
//           </IconButton>
//           <IconButton aria-label="next song">
//             <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
//           </IconButton>
//         </Box>
//       </Box>

//       <Stack sx={{ width: '25%', background: '#6f6f6f1c', borderRadius: '10px' }}>
//         <Box sx={{ overflowY: 'scroll',margin:'0.5em 0.5em 0.5em 0'}}>
//           <SongList />
//         </Box>
//       </Stack>


//     </Stack>
//   )
// }

// export default MusicPlayer