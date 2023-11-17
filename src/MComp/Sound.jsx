import React from 'react';
import { Box, Stack } from '@mui/material';

const Sound = () => {
  return (
    <Stack direction={'row'} height={'6vh'} gap={'0.2em'} alignItems={'center'} sx={{scale:'0.8' }}>
        <Box sx={{width:'0.5em',height:'20%',background:'#2aff7e',borderRadius:'1em'}} className='c1'></Box>
        <Box sx={{width:'0.5em',height:'50%',background:'#2aff7e',borderRadius:'1em'}} className='c2'></Box>
        <Box sx={{width:'0.5em',height:'100%',background:'#2aff7e',borderRadius:'1em'}} className='c3'></Box>
        <Box sx={{width:'0.5em',height:'70%',background:'#2aff7e',borderRadius:'1em'}} className='c4'></Box>
        <Box sx={{width:'0.5em',height:'80%',background:'#2aff7e',borderRadius:'1em'}} className='c5'></Box>
        <Box sx={{width:'0.5em',height:'30%',background:'#2aff7e',borderRadius:'1em'}} className='c6'></Box>
        <Box sx={{width:'0.5em',height:'15%',background:'#2aff7e',borderRadius:'1em'}} className='c7'></Box>
    </Stack>
  )
}

export default Sound