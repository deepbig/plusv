import { styled } from '@mui/material/styles';

const GradientText = styled('span')(({ theme }) => ({
  background: `linear-gradient(to right, #DB96FF, #2AF7A7)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

export default GradientText;
