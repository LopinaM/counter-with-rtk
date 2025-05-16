import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  COUNT_VALUE,
  MAX_INPUT_VALUE_STORAGE_KEY,
  MAX_VALUE_STORAGE_KEY,
  MIN_INPUT_VALUE_STORAGE_KEY,
  START_VALUE_STORAGE_KEY,
} from "../constants/constants";

export interface CounterState {
  minValue: number;
  maxValue: number;
  minInputValue: number;
  maxInputValue: number;
  count: number;
}

const initialState: CounterState = {
  minValue: 0,
  maxValue: 1,
  minInputValue: 0,
  maxInputValue: 1,
  count: 0,
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
    setMinInputValue(state, action: PayloadAction<number>) {
      state.minInputValue = action.payload;
    },
    setMaxInputValue(state, action: PayloadAction<number>) {
      state.maxInputValue = action.payload;
    },
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    loadFromStorage(state) {
      const count = localStorage.getItem(COUNT_VALUE);
      const min = localStorage.getItem(START_VALUE_STORAGE_KEY);
      const max = localStorage.getItem(MAX_VALUE_STORAGE_KEY);
      const minInput = localStorage.getItem(MIN_INPUT_VALUE_STORAGE_KEY);
      const maxInput = localStorage.getItem(MAX_INPUT_VALUE_STORAGE_KEY);

      if (min) state.minValue = JSON.parse(min);
      if (max) state.maxValue = JSON.parse(max);
      if (minInput) state.minInputValue = JSON.parse(minInput);
      if (maxInput) state.maxInputValue = JSON.parse(maxInput);
      if (count) state.count = JSON.parse(count);
    },
  },
});

export const {
  setMinValue,
  setMaxValue,
  setMinInputValue,
  setMaxInputValue,
  setCount,
  loadFromStorage,
} = counterSlice.actions;
