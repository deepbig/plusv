import { Box, Typography } from '@mui/material';
import React from 'react';

function Result() {
  return (
    <Box id='result'>
      <Typography variant='h4' component='h1' gutterBottom>
        Result
      </Typography>
      <Typography variant='body1' gutterBottom>
        2022/11/27 ~ 2022/12/24
      </Typography>
    </Box>
  );
}

export default Result;
