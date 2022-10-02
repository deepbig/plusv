import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import LinearProgress, {
  LinearProgressProps,
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { getDDayInPercentage } from '../../lib/util';

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'progress',
})<{ progress: number }>(({ theme, progress }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: `linear-gradient(to right, #DB96FF ${100 -
      progress}%, #2AF7A7 100%)`,
  },
}));

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <BorderLinearProgress
            variant='determinate'
            progress={props.value}
            {...props}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant='body2' color='text.secondary'>{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '33%', mr: 1 }}>
          <Typography variant='body2' color='text.secondary' align='right'>
            2022/10/22
          </Typography>
          <Typography variant='body2' color='text.secondary' align='right'>
            Design
          </Typography>
        </Box>
        <Box sx={{ width: '33%', mr: 1 }}>
          <Typography variant='body2' color='text.secondary' align='right'>
            2022/11/22
          </Typography>
          <Typography variant='body2' color='text.secondary' align='right'>
            Impl.
          </Typography>
        </Box>
        <Box sx={{ width: '33%', mr: 1 }}>
          <Typography variant='body2' color='text.secondary' align='right'>
            2022/12/24
          </Typography>
          <Typography variant='body2' color='text.secondary' align='right'>
            Result
          </Typography>
        </Box>
        <Box sx={{ minWidth: 35 }}></Box>
      </Box>
    </>
  );
}

function Progress() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const res = getDDayInPercentage('2022-09-24', '2022-12-24');
    setProgress(res > 100 ? 100 : res);

  }, []);
  return (
    <Box>
      <Typography variant='h4' component='h1' gutterBottom>
        Progress
      </Typography>
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel value={progress} />
      </Box>
    </Box>
  );
}

export default Progress;
