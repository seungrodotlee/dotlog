import * as React from "react";
import { FC, useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchArticleList } from "../store/modules/article";

import noise from "../assets/img/noise.svg";
import colors from "tailwindcss/colors";

const Noise = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: url(${noise}) 0 0 repeat;
  background-position: center;

  animation: bg-animation 1.5s steps(6) infinite;

  @keyframes bg-animation {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -10%);
    }
    30% {
      transform: translate(3%, -15%);
    }
    50% {
      transform: translate(12%, 9%);
    }
    70% {
      transform: translate(9%, 4%);
    }
    90% {
      transform: translate(-1%, 7%);
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

const About: FC = () => {
  const article = useAppSelector((state) => state.article.article);
  const dispatch = useAppDispatch();

  const onMounted = async () => {
    await dispatch(fetchArticleList());
    console.log(article);
  };

  useEffect(() => {
    onMounted();
  }, []);

  return (
    <div className="w-full h-full flex-col">
      <div className="absolute w-full h-48 bg-gradient-to-b from-black to-transparent"></div>
      <div className="container relative !px-0 mt-48 rounded-3xl overflow-hidden mb-36">
        <Noise />
        <Overlay className="bg-gradient-to-b from-neutral-700 to-neutral-400"></Overlay>
        <div className="w-full h-screen"></div>
        <div className="w-full h-screen"></div>
      </div>
    </div>
  );
};

export default About;
