import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import GradientText from '../styled/GradientText';

function Introduction() {
  return (
    <Box id='introduction'>
      <Typography variant='h4' component='h1' gutterBottom>
        Introduction
      </Typography>
      <Typography
        variant='h5'
        component='h2'
        gutterBottom
        sx={{
          fontFamily: 'monospace',
          fontWeight: 800,
          letterSpacing: '.3rem',
        }}
      >
        <GradientText>PLUSV+</GradientText>
      </Typography>
      <Typography variant='body1' gutterBottom>
        <GradientText>{'(   ) plus value '}</GradientText>
        라는 의미로 사회 속 가치를 가진 모든 것들을 비추고, 한 스푼의 가치를
        더해 빛나게 하는 것이 목표인 프로젝트입니다.
      </Typography>
    </Box>
  );
}

export default Introduction;
