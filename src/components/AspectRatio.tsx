import * as React from "react";
import { FC, useRef, useState, useEffect, ReactNode } from "react";

interface IAspectRatioProps {
  children: ReactNode;
  base: string;
  ratio: string;
}

const AspectRatio: FC<IAspectRatioProps> = ({ children, base, ratio }) => {
  const aspectRatioRoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const child = aspectRatioRoot.current.querySelector(":scope > *");
    let size, origin, target;

    origin = base === "w" ? "width" : "height";
    target = base === "w" ? "height" : "width";

    const seperated = ratio.split("/");
    const numerater = parseInt(seperated[0]);
    const denominator = parseInt(seperated[1]);

    size = child.getBoundingClientRect()[origin] * (numerater / denominator);

    child.setAttribute("style", `${target}: ${size}px`);
  }, [aspectRatioRoot]);

  return <div ref={aspectRatioRoot}>{children}</div>;
};

export default AspectRatio;
