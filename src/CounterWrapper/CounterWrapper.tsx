import { Counter } from "./Counter/Counter";
import { Settings } from "./Settings/Settings";
import { useAppSelector } from "../store/hooks";

export const CounterWrapper = () => {
  const { showSettings } = useAppSelector((state) => state.counter);

  return <>{showSettings ? <Settings /> : <Counter />}</>;
};
