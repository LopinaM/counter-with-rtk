import s from "../CounterWrapper.module.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setCount, setShowSettings } from "../../store/counterSlice";

export const Counter = () => {
  const { count, minValue, maxValue } = useAppSelector(
    (state) => state.counter
  );

  const dispatch = useAppDispatch();

  const setIncCount = () => {
    dispatch(setCount(count + 1));
  };

  const reset = () => {
    dispatch(setCount(minValue));
  };

  const settings = () => {
    dispatch(setShowSettings(true));
  };

  return (
    <div className={s.container}>
      <div
        className={s.count_wrap}
        style={{ color: count === maxValue ? "red" : "inherit" }}
      >
        {count}
      </div>

      <div className={s.wrap}>
        <button onClick={setIncCount} disabled={count >= maxValue}>
          inc
        </button>
        <button onClick={reset} disabled={count <= minValue}>
          reset
        </button>
        <button onClick={settings}>set</button>
      </div>
    </div>
  );
};
