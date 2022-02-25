import * as React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Home from "../views/Home";
import Main from "../views/Main";
import Article from "../views/Article";
import ArticleList from "../views/ArticleList";

const TransitionElement = styled.div``;

const AppRouter: React.FC = () => {
  const location = useLocation();

  const [prevLocation, setPrevLocation] = useState<string>();
  const [slideMode, setSlideMode] = useState<string>("");

  useEffect(() => {
    console.log(prevLocation, location);

    if (prevLocation === "/" && location.pathname === "/main") {
      setSlideMode("page-slide-up");
    }

    setPrevLocation(location.pathname);
  }, [location]);

  return (
    <TransitionGroup
      className="transition-grouper relative w-full h-full bg-black"
      component={TransitionElement}
      childFactory={(child) => {
        return React.cloneElement(child, {
          classNames: location.state ? location.state["transition"] : "",
          timeout: 1000,
        });
      }}
    >
      <CSSTransition key={location.key} timeout={0} classNames="">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/article/:category/:id" element={<Article />} />
          <Route path="/articles">
            <Route path=":category" element={<ArticleList />} />
            <Route path="" element={<ArticleList />} />
          </Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
