import type { Middleware } from "@reduxjs/toolkit";
import {
  COUNT_VALUE,
  START_VALUE_STORAGE_KEY,
  MAX_VALUE_STORAGE_KEY,
  MIN_INPUT_VALUE_STORAGE_KEY,
  MAX_INPUT_VALUE_STORAGE_KEY,
} from "../constants/constants";
import type { CounterState } from "./counterSlice";

export const counterStorageMiddleware: Middleware<object> =
  (store) => (next) => (action) => {
    const result = next(action);

    const state = store.getState() as { counter: CounterState };

    localStorage.setItem(COUNT_VALUE, JSON.stringify(state.counter.count));
    localStorage.setItem(
      START_VALUE_STORAGE_KEY,
      JSON.stringify(state.counter.minValue)
    );
    localStorage.setItem(
      MAX_VALUE_STORAGE_KEY,
      JSON.stringify(state.counter.maxValue)
    );
    localStorage.setItem(
      MIN_INPUT_VALUE_STORAGE_KEY,
      JSON.stringify(state.counter.minInputValue)
    );
    localStorage.setItem(
      MAX_INPUT_VALUE_STORAGE_KEY,
      JSON.stringify(state.counter.maxInputValue)
    );

    return result;
  };
