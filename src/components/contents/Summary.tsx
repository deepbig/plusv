import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { handleNavClick } from '../../lib/util';

const images = {
  design:
    'https://firebasestorage.googleapis.com/v0/b/plus-v.appspot.com/o/resources%2FDesign_section.png?alt=media&token=fdad5b52-afc8-409b-9581-037a1989f99b',
  impl:
    'https://firebasestorage.googleapis.com/v0/b/plus-v.appspot.com/o/resources%2Fcoming_soon_6.png?alt=media&token=2c8dc9d9-73e5-4452-876c-3bc4a6d7e150',
  result:
    'https://firebasestorage.googleapis.com/v0/b/plus-v.appspot.com/o/resources%2Fcoming_soon_1.png?alt=media&token=aa4059c5-5755-4611-a3e6-4ea01b1ce972',
};

function Summary() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant='h5' component='div'>
              Design
            </Typography>
          </CardContent>
          <CardMedia
            component='img'
            alt='COMING SOON'
            height='300'
            image={images.design}
          />

          <CardActions style={{ width: '100%', justifyContent: 'flex-end' }}>
            <Button size='small' onClick={() => handleNavClick('design')}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant='h5' component='div'>
              Implementation
            </Typography>
          </CardContent>
          <CardMedia
            component='img'
            alt='COMING SOON'
            height='300'
            image={images.impl}
          />
          <CardActions style={{ width: '100%', justifyContent: 'flex-end' }}>
            <Button
              size='small'
              onClick={() => handleNavClick('implementation')}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant='h5' component='div'>
              Result
            </Typography>
          </CardContent>
          <CardMedia
            component='img'
            alt='COMING SOON'
            height='300'
            image={images.result}
          />
          <CardActions style={{ width: '100%', justifyContent: 'flex-end' }}>
            <Button size='small' onClick={() => handleNavClick('result')}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Summary;
