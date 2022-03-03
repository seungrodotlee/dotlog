import * as React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Home from "../views/Home";
import ArticleList from "../views/ArticleList";
import CategoryList from "../views/CategoryList";
import Article from "../views/Article";

const TransitionElement = styled.div``;

const AppRouter: React.FC = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
      depth: 1,
    },
    {
      path: "/articles",
      element: <ArticleList />,
      depth: 10,
    },
    {
      path: "/articles/:category",
      element: <ArticleList />,
      depth: 10,
    },
    {
      path: "/category",
      element: <CategoryList />,
      depth: 11,
    },
    {
      path: "/category/:parent",
      element: <CategoryList />,
      depth: 11,
    },
    {
      path: "/article/:category/:id",
      element: <Article />,
      depth: 100,
    },
  ];

  const location = useLocation();

  const [from, setFrom] = useState<string>();
  const [slideMode, setSlideMode] = useState<string>("");

  useEffect(() => {
    let currentRoute, prevRoute;

    routes.forEach((r) => {
      if (matchPath({ path: r.path }, location.pathname)) {
        currentRoute = r;
      }

      if (from && matchPath({ path: r.path }, from)) {
        prevRoute = r;
      }
    });

    let direction;
    if (prevRoute && prevRoute.depth < currentRoute.depth) {
      if (
        Math.pow(10, ("" + prevRoute.depth).length - 1) * 10 <=
        currentRoute.depth
      ) {
        direction = "up";
      } else {
        direction = "left";
      }
    } else if (prevRoute && prevRoute.depth !== currentRoute.depth) {
      if (
        Math.pow(10, ("" + currentRoute.depth).length - 1) * 10 <=
        prevRoute.depth
      ) {
        direction = "down";
      } else {
        direction = "right";
      }
    }

    if (direction) {
      setSlideMode(`slide-${direction}`);
    } else {
      setSlideMode(null);
    }

    setFrom(location.pathname);
  }, [location]);

  return (
    <TransitionGroup
      className={`transition-grouper relative w-full h-full bg-black ${slideMode}`}
      component={TransitionElement}
    >
      <CSSTransition
        key={location.key}
        timeout={1000}
        classNames="route-animation"
      >
        <Routes location={location}>
          {routes.map((r, i) => {
            return <Route key={i} path={r.path} element={r.element} />;
          })}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
