import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  minValue: number;
  maxValue: number;
  count: number;

  showSettings: boolean;
}

const initialState: CounterState = {
  minValue: 0,
  maxValue: 1,
  count: 0,

  showSettings: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setMinValue(state, action: PayloadAction<number>) {
      state.minValue = action.payload;
    },
    setMaxValue(state, action: PayloadAction<number>) {
      state.maxValue = action.payload;
    },
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    setShowSettings(state, action: PayloadAction<boolean>) {
      state.showSettings = action.payload;
    },
  },
});

export const { setMinValue, setMaxValue, setCount, setShowSettings } =
  counterSlice.actions;
