import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import SongTab from './SongTab';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: 'transparent'
}));

export default function SongList({ icon }) {

    const generate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    return (
        <Box sx={{ width: '-webkit-fill-available', }}>
            <List>
                {generate.map((value, index) => (
                    <SongTab value={value} key={index}  icon={icon} />
                ))}
            </List>
        </Box>
    );
}