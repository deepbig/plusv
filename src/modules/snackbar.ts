import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SnackBarData } from '../types';
import { RootState } from './index';

export interface SnackbarState {
  snackbar: SnackBarData;
}

const initialState: SnackbarState = {
  snackbar: {
    open: false,
    severity: 'info',
    message: '',
  } as SnackBarData,
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbar: (state, action: PayloadAction<SnackBarData>) => {
      state.snackbar = action.payload;
    },
    setSnackbarOpen: (state, action: PayloadAction<boolean>) => {
        state.snackbar.open = action.payload;
    },
    reset: () => initialState,
  },
});

export const { setSnackbar, setSnackbarOpen, reset } = snackbarSlice.actions;
export const getSnackbar = (state: RootState) => state.snackbar.snackbar;
export default snackbarSlice.reducer;
