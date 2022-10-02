import { Container, Grid, Toolbar } from '@mui/material';
import React from 'react';
import Design from '../components/contents/Design';
import Implemetation from '../components/contents/Implemetation';
import Introduction from '../components/contents/Introduction';
import Result from '../components/contents/Result';
import Summary from '../components/contents/Summary';
import Footer from '../components/footer/Footer';
import NavBar from '../components/navBar/NavBar';
import ProgressBar from '../components/contents/Progress';
import Additions from '../components/contents/Additions';

function MainPage() {
  return (
    <>
      <NavBar />
      <Toolbar id='back-to-top-anchor' />
      <Container maxWidth={'xl'} sx={{ mt: 2, mb: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Introduction />
          </Grid>
          <Grid item xs={12}>
            <ProgressBar />
          </Grid>

          <Grid item xs={12}>
            <Summary />
          </Grid>

          <Grid item xs={12}>
            <Design />
          </Grid>
          <Grid item xs={12}>
            <Implemetation />
          </Grid>
          <Grid item xs={12}>
            <Result />
          </Grid>
          <Grid item xs={12}>
            <Additions />
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </>
  );
}

export default MainPage;
