import React, { useContext, useEffect, useState } from "react"; import MCard from "./MCard";
import { Box } from "@mui/material";
import Loader from "./Loader";
import { MusicContextAPI } from "../utils/MusicContextAPI";
import { fetchFromAPI } from "../utils/FtechFromApi";

const Feed = () => {
  const { selectMood, music, setMusic } = useContext(MusicContextAPI);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMusic(null);
    setLoading(true);

    fetchFromAPI(selectMood)
      .then((data) => {
        setMusic(data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [selectMood]);

  if (loading) return <Loader />;
  if (!music?.length) return <div>No music found.</div>;

  return (
    <Box
      sx={{
        overflowY: "scroll",
        background: "transparent",
        borderRadius: "0.4em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "-webkit-fill-available",
          height: "-webkit-fill-available",
          columnGap: "1em",
          rowGap: "2em",
          marginRight: "1em",
        }}
      >
        {
          //  2d2d2d
          music.map((music) => (
            <MCard music={"music"} key={"music.id"} />
          ))
        }

        {music.map((musicItem) => (
          <MCard music={musicItem} key={musicItem.id} />
        ))}
      </Box>
    </Box>
  );
};

export default Feed;
