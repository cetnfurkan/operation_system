import { configureStore } from "@reduxjs/toolkit";
import windowSlice from "./slices/window";

export const store = configureStore({
  reducer: {
    window: windowSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;