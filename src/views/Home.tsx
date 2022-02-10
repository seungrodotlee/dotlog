import * as React from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleTheme, setTheme } from "../store/modules/theme";

const Home: React.FC = () => {
  const { sqrt, pow, ceil } = Math;

  const diag = sqrt(pow(window.innerHeight, 2) + pow(window.innerWidth, 2));
  console.log("diag?", diag);
  const dotSize = ceil(diag / (16 * 13)) * 13;
  const ratio = 1 / ceil(dotSize / 13);
  console.log(dotSize, ratio);
  const [dotStyle, setDotStyle] = useState({
    width: `${dotSize}rem`,
    height: `${dotSize}rem`,
    transform: `scale(1)`,
  });

  return (
    <div className="w-full h-full flex-center flex-col overflow-hidden">
      <div className="flex items-center">
        <div className="dot bg-foreground rounded-full" style={dotStyle}></div>
        {/* <p className="font-black text-[16rem] ml-2">log</p> */}
      </div>
    </div>
  );
};

export default Home;
