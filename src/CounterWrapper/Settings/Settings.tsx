import React from "react";
import s from "../CounterWrapper.module.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setCount,
  setMaxInputValue,
  setMaxValue,
  setMinInputValue,
  setMinValue,
} from "../../store/counterSlice";

export const Settings = () => {
  const { minValue, maxValue, minInputValue, maxInputValue } = useAppSelector(
    (state) => state.counter
  );
  const dispatch = useAppDispatch();

  const maxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxInputValue(Number(e.currentTarget.value)));
  };

  const startValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMinInputValue(Number(e.currentTarget.value)));
  };

  const setParams = () => {
    dispatch(setMinValue(minInputValue));
    dispatch(setMaxValue(maxInputValue));
    dispatch(setCount(minInputValue));
  };

  const disabled =
    minInputValue < 0 ||
    minInputValue === maxInputValue ||
    maxInputValue < minInputValue ||
    (minValue === minInputValue && maxValue === maxInputValue);

  const minInputError = maxInputValue === minInputValue || minInputValue < 0;
  const maxValueError =
    maxInputValue === minInputValue || maxInputValue < minInputValue;

  return (
    <div className={s.container}>
      <div className={s.count_wrap}>
        <div className={s.wrap_input}>
          <span className={s.span}>max Value:</span>
          <input
            className={`${s.input} ${maxValueError ? s.error : ""}`}
            type="number"
            value={maxInputValue}
            onChange={maxValueChange}
          />
        </div>
        <div className={s.wrap_input}>
          <span className={s.span}>start Value:</span>
          <input
            className={`${s.input} ${minInputError ? s.error : ""}`}
            type="number"
            value={minInputValue}
            onChange={startValueChange}
          />
        </div>
      </div>

      <div className={s.wrap}>
        <button onClick={setParams} disabled={disabled}>
          set
        </button>
      </div>
    </div>
  );
};
