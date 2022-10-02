import { Container, Typography } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Container maxWidth={'xl'} sx={{ mt: 2, mb: 4 }}>
      <Typography
        variant='body2'
        color='GrayText.secondary'
        align='center'
        sx={{ pt: 4 }}
      >
        {'Copyright © PLUSV+ ' + new Date().getFullYear() + '.'}
      </Typography>
    </Container>
  );
}

export default Footer;
