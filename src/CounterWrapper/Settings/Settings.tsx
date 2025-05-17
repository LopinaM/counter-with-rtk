import React from "react";
import s from "../CounterWrapper.module.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setCount,
  setMaxValue,
  setMinValue,
  setShowSettings,
} from "../../store/counterSlice";

export const Settings = () => {
  const { minValue, maxValue } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const maxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxValue(Number(e.currentTarget.value)));
  };

  const startValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMinValue(Number(e.currentTarget.value)));
  };

  const setParams = () => {
    dispatch(setCount(minValue));
    dispatch(setShowSettings(false));
  };

  const disabled = minValue < 0 || minValue === maxValue || maxValue < minValue;

  const minInputError = maxValue === minValue || minValue < 0;
  const maxValueError = maxValue === minValue || maxValue < minValue;

  const message =
    minValue === maxValue
      ? "Max and min values can't be equal!"
      : maxValue < minValue
      ? "Max value can't be less than min value!"
      : minValue < 0
      ? "Min value can't be negative!"
      : "";

  const value = (
    <div
      style={{
        color:
          typeof message === "string" || message === maxValue
            ? "red"
            : "inherit",
      }}
    >
      {message}
    </div>
  );

  return (
    <div className={s.container}>
      <div className={s.count_wrap}>
        <div className={s.wrap_input}>
          <span className={s.span}>max Value:</span>
          <input
            className={`${s.input} ${maxValueError ? s.error : ""}`}
            type="number"
            value={maxValue}
            onChange={maxValueChange}
          />
        </div>
        <div className={s.wrap_input}>
          <span className={s.span}>start Value:</span>
          <input
            className={`${s.input} ${minInputError ? s.error : ""}`}
            type="number"
            value={minValue}
            onChange={startValueChange}
          />
        </div>
        <div style={{ fontSize: "20px", height: "20px" }}>{value}</div>
      </div>

      <div className={s.wrap}>
        <button onClick={setParams} disabled={disabled}>
          set
        </button>
      </div>
    </div>
  );
};
