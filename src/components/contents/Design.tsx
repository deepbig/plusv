import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

/**
 * 해결하고 싶은 사회 문제 리스트 작성 (관심 분야 및 공모전 조사 등) (9/24 ~ 9/30)
 * 팀원들이 선호하는 카테고리 선정 (고령층의 디지털 문맹 문제) (10/1)
 * 데스크 리서치 진행 (10/2 ~ 10/7)
 * 데스크 리서치 리뷰 및 발견한 문제 리스트 작성 (10/8)
 * 발견한 문제의 당사자들과 인터뷰 진행 (10/9 ~ 10/14)
 * 인터뷰 리뷰 후 인사이트를 기반으로 2차 문제 정의 (10/15)
 * 켐페인 주제를 확정하기 위한 2차 인터뷰 및 데스크 리서치 진행 (10/16 ~ 10/22)
 * @returns 
 */
function Design() {
  return (
    <Box id='design'>
      <Typography variant='h4' component='h1' gutterBottom>
        Design
      </Typography>
      <Typography variant='body1' gutterBottom>
        2022/09/24 ~ 2022/10/22
      </Typography>

      <Grid container direction='row' spacing={2}>
        <Grid item xs={12} md={6}>
          
        </Grid>
      </Grid>
    </Box>
  );
}

export default Design;
