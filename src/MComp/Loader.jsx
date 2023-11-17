import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () => {
  return (
    <Stack direction='row' display={'flex'} justifyContent='center' alignItems='center' height={'-webkit-fill-available'} >
      <CircularProgress />
    </Stack>
  )
}

export default Loader;
