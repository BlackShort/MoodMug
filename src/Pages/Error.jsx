import { Box, Typography } from '@mui/material'
import React from 'react'

const Error = () => {
  return (
    <Box sx={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Typography variant='h5' color={'#c3c3c3'} sx={{ userSelect: 'none' }}>Sorry couldn't find it...</Typography>
    </Box>
  )
}

export default Error