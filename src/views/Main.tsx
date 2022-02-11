import * as React from "react";
import { FC } from "react";
import styled from "styled-components";

import noise from "../assets/img/noise.svg";

const About: FC = () => {
  const Noise = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #424242, transparent), url(${noise});
    filter: contrast(170%) brightness(1000%);

    @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
      .noise {
        filter: contrast(290%) brightness(1000%);
      }
    }
  `;

  const Overlay = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
  `;

  return (
    <div className="w-full h-full flex-col">
      <div className="absolute w-full h-48 bg-gradient-to-b from-black to-transparent"></div>
      <div className="container relative !px-0 mt-48 bg-gradient-to-b from-neutral-900 rounded-3xl">
        <Noise />
        <Overlay className="bg-neutral-800"></Overlay>
        <div className="w-full h-screen"></div>
        <div className="w-full h-screen"></div>
      </div>
    </div>
  );
};

export default About;
