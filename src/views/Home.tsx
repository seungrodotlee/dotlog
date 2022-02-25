import * as React from "react";
import { FC, CSSProperties, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { delay, changeObjectMembers } from "../helpers/utils";
import Geul from "geul";

const Home: FC = () => {
  const navigate = useNavigate();

  const { sqrt, pow, ceil } = Math;

  const logLabelElement = useRef(null);

  /** dot animation */
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

  /** fade animation */
  const [faded, setFaded] = useState<boolean>(false);

  const onMounted = async () => {
    if (localStorage.getItem("intro") === "Y") {
      navigate("/articles", { state: { transition: "page-slide-up" } });
      return;
    }

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
    await logLabel.run();
    await delay(3000);
    setFaded(true);
    await delay(500);
    localStorage.setItem("intro", "Y");
    navigate("/main", { state: { transition: "page-slide-up" } });
  };

  useEffect(() => {
    onMounted();
  }, []);

  return (
    <div className="w-full h-full flex-center flex-col overflow-hidden">
      <div
        className={`flex items-center transition duration-500 ${
          faded ? `opacity-0 transform -translate-y-12` : ""
        }`}
      >
        {localStorage.getItem("intro") !== "Y" && (
          <div
            className="dot bg-foreground rounded-full transition-transform ease-both-xl"
            style={dotStyle}
          ></div>
        )}

        <p ref={logLabelElement} className="font-black text-[16rem] ml-2">
          &nbsp;
        </p>
      </div>
    </div>
  );
};

export default Home;
