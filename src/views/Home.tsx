import * as React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleTheme, setTheme } from "../store/modules/theme";

const Home: React.FC = () => {
  const test = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full h-full flex-center flex-col">
      My React App {test}
      <div className="mt-2">
        <button className="mr-4" onClick={() => dispatch(setTheme("light"))}>
          light
        </button>
        <button onClick={() => dispatch(setTheme("dark"))}>dark</button>
      </div>
    </div>
  );
};

export default Home;
