import { Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import MCard from '../MComp/MCard';
import {MusicContextAPI} from '../utils/MusicContextAPI';
import {fetchFromAPI} from '../utils/FtechFromApi';


const Search = () => {
  const { selectMood, music, setMusic } = useContext(MusicContextAPI);

  useEffect(() => {
    setMusic(null);

    // fetchFromAPI(`search?part=snippet&q=${selectMood}`)
      // .then((data) => setMusic(data.items))

  }, [selectMood]);

  return (
    <div className='Search'>
      {
        music ?
          // <Typography variant='h5' color={'#c3c3c3'} sx={{ userSelect: 'none' }}>This is a Result...</Typography>

          <MCard music={music} key={music.id} />

          :
          <Typography variant='h5' color={'#c3c3c3'} sx={{ userSelect: 'none' }}>Search yours moods music...</Typography>
      }
    </div>
  )
}

export default Search