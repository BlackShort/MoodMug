import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import img from "../assets/7.png";
import { IconButton } from "@mui/material";
import { PauseRounded, PlayArrowRounded } from "@mui/icons-material";
import Loader from "./Loader";

const MCard = ({ music }) => {
  const [paused, setPaused] = useState(false);

  if (!music) {
    return <Loader />;
  }
  return (
    <Card
      sx={{
        position: "relative",
        // maxWidth: 250,
        background: "transparent",
        color: "#fff",
        cursor: "pointer",
        flex: { xs: '1 1 30%',sm: '0 1 23%', md: '0 1 23%' }
      }}
    >
      <CardMedia component="img" alt="green iguana" height="150" image={music.coverArt.sources[0].url||img} />
      <section className="CardHover">
        <Typography variant="subtitle1">{music.name}</Typography>
        <Typography variant="subtitle1">{music.duration.totalMilliseconds}</Typography>
      </section>
      <section className="CardPause">
        <IconButton
          aria-label={paused ? 'play' : 'pause'}
          sx={{ width: '3em', height: '3em' }}
          onClick={() => setPaused(!paused)}
        >
          {paused ? (
            <PauseRounded sx={{ fontSize: '3rem', fill: '#ffffff' }} />
          ) : (
            <PlayArrowRounded sx={{ fontSize: '3rem', fill: '#ffffff' }} />
          )}
        </IconButton>
      </section>

    </Card>
  );
};

export default MCard;
