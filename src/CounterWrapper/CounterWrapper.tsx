import React from "react";
import { Counter } from "./Counter/Counter";
import { Settings } from "./Settings/Settings";
import { loadFromStorage } from "../store/counterSlice";
import { useAppDispatch } from "../store/hooks";

export const CounterWrapper = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(loadFromStorage());
  }, [dispatch]);

  return (
    <>
      <Settings />
      <Counter />
    </>
  );
};
