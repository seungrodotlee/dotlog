import * as React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleTheme, setTheme } from "../store/modules/theme";

const Home: React.FC = () => {
  return (
    <div className="w-full h-full flex-center flex-col">
      <div className="dot bg-foreground w-8 h-8 rounded-full"></div>
    </div>
  );
};

export default Home;
