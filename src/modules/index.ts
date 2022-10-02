import { configureStore } from '@reduxjs/toolkit';
import backdropReducer from './backdrop';
import snackbarReducer from './snackbar';

export const store = configureStore({
  reducer: {
    backdrop: backdropReducer,
    snackbar: snackbarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
