import * as React from 'react';
import { useState, useContext } from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Like from '@mui/icons-material/Favorite';
import Favourite from '@mui/icons-material/FavoriteBorderRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import PauseRounded from '@mui/icons-material/PauseRounded';
import { ListItem } from '@mui/material';

import User from '../assets/7.png';

const SongTab = ({ icon }) => {
    const [like, setLike] = useState(true);
    const [ paused, setPaused ] = useState(true)

    return (
        <ListItem
            secondaryAction={
                icon ?
                    <IconButton edge="end" aria-label="delete" onClick={() => setPaused(!paused)}>
                        {
                            paused ? <PlayArrowRounded fontSize='large' /> : <PauseRounded fontSize='large' />

                        }
                    </IconButton>
                    :
                    <IconButton edge="end" aria-label="delete" onClick={() => setLike(!like)}>
                        {

                            like ? <Like sx={{ fill: '#00dddd' }} /> : <Favourite />

                        }
                    </IconButton>

            }
        >
            <ListItemAvatar>
                <Avatar variant='rounded' sx={{ overflow: 'hidden' }}>
                    <img src={User} alt="" style={{ width: '40px', height: '40px', objectFit: 'fill' }} />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary="Single-line item"
            />
        </ListItem>
    )
}

export default SongTab