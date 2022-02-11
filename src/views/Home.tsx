import * as React from "react";
import { FC, CSSProperties, useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleTheme, setTheme } from "../store/modules/theme";
import { delay, changeObjectMembers } from "../helpers/utils";
import Geul from "geul";

const Home: FC = () => {
  const { sqrt, pow, ceil } = Math;

  const logLabelElement = useRef(null);

  const diag = sqrt(pow(window.innerHeight, 2) + pow(window.innerWidth, 2));
  const dotSize = ceil(diag / (16 * 13)) * 13;
  const ratio = 1 / ceil(dotSize / 13);

  const dotShrinkDuration = 5000;

  const [dotStyle, setDotStyle] = useState<CSSProperties>({
    width: `${dotSize}rem`,
    height: `${dotSize}rem`,
    transform: `scale(1)`,
    transitionDuration: `${dotShrinkDuration}ms`,
  });

  const onMounted = async () => {
    await delay(1000);

    setDotStyle(
      changeObjectMembers(dotStyle, {
        transform: `scale(${ratio})`,
      })
    );
    await delay(dotShrinkDuration + 1000);
    setDotStyle(
      changeObjectMembers(dotStyle, {
        width: `13rem`,
        height: `13rem`,
        transform: `scale(1)`,
        transition: "none",
      })
    );

    const logLabel = new Geul("log", logLabelElement.current, 100);
    logLabel.run();
  };

  useEffect(() => {
    onMounted();
  }, []);

  return (
    <div className="w-full h-full flex-center flex-col overflow-hidden">
      <div className="flex items-center">
        <div
          className="dot bg-foreground rounded-full transition-transform ease-both-xl"
          style={dotStyle}
        ></div>
        <p ref={logLabelElement} className="font-black text-[16rem] ml-2"></p>
      </div>
    </div>
  );
};

export default Home;
