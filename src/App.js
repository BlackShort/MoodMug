import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Box, Stack } from "@mui/material";
import { MusicPlayer, Navbar, Player, Sidebar } from "./MComp";
import { Home, Library, Search, Setting } from "./Pages";
import Error from "./Pages/Error";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar name="MoodMug" />

        <Stack
          direction={"column"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "calc( 100vh - (7vh + 0.6em + 2em))",
            padding: "1em",
            gap: "1em",
          }}
        >
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            height={{ xs: '100%', md: '76%' }}
            gap={"1em"}
          >
            <Box flex={1} display={"flex"}>
              <Sidebar />
            </Box>
            <Stack
              flex={5}
              sx={{
                background: "#252525",
                borderRadius: "10px",
                padding: "1em 0.2em 1em 1em",
              }}
              width={"-webkit-fill-available"}
              height={{ xs: '76%', md: '-webkit-fill-available' }}
              alignItems={"center"}
              gap={"1em"}
            >
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="Library" element={<Library />} />
                <Route path="Search" element={<Search />} />
                <Route path="Setting" element={<Setting />} />
                <Route path="*" element={<Error />} />
                {/* <Route path="/MusicPlayer" element={<MusicPlayer />} /> */}
              </Routes>
            </Stack>
          </Stack>
          <Player />
        </Stack>
      </BrowserRouter>
    </div>
  );
}

export default App;
