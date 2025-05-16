import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { counterStorageMiddleware } from "./counterMiddleware";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(counterStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
