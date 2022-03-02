import * as React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigationType,
  matchPath,
} from "react-router-dom";
import { createBrowserHistory } from "history";
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
    },
    {
      path: "/category/:parent",
      element: <CategoryList />,
    },
    {
      path: "/article/:category/:id",
      element: <Article />,
      depth: 100,
    },
  ];

  const location = useLocation();
  const navigationType = useNavigationType();

  const [from, setFrom] = useState<string>();
  const [slideMode, setSlideMode] = useState<string>("");

  useEffect(() => {
    console.log("location changed");
    let currentRoute, prevRoute;

    routes.forEach((r) => {
      if (matchPath({ path: r.path }, location.pathname)) {
        currentRoute = r;
      }

      if (from && matchPath({ path: r.path }, from)) {
        prevRoute = r;
      }
    });

    if (prevRoute === currentRoute) return;

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
    } else if (prevRoute) {
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
