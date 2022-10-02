import React from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from './hooks';
import { getBackdrop } from './modules/backdrop';
import {
  Backdrop,
  CircularProgress,
  createTheme,
  CssBaseline,
  Snackbar,
  ThemeProvider,
} from '@mui/material';
import { getSnackbar, setSnackbarOpen } from './modules/snackbar';
import { ColorModeContext } from './config/ColorModeContext';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

function MyApp() {
  const dispatch = useAppDispatch();
  const backdrop = useAppSelector(getBackdrop);
  const snackbar = useAppSelector(getSnackbar);

  const handleSnackbarClose = () => {
    dispatch(setSnackbarOpen(false));
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1000 }}
        open={backdrop}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          guideline: {
            color: 'gray',
            display: 'block',
          },
          button: {
            textTransform: 'none',
          },
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 2000,
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
