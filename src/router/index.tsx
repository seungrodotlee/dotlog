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
import Main from "../views/Main";
import Article from "../views/Article";
import ArticleList from "../views/ArticleList";

const TransitionElement = styled.div``;

const AppRouter: React.FC = () => {
  //         <Route path="/" element={<Home />} />
  //         <Route path="/main" element={<Main />} />
  //         <Route path="/article/:category/:id" element={<Article />} />
  //         <Route path="/articles">
  //           <Route path=":category" element={<ArticleList />} />
  //           <Route path="" element={<ArticleList />} />
  //         </Route>

  const routes = [
    {
      path: "/",
      element: <Home />,
      depth: 1,
    },
    {
      path: "/article/:category/:id",
      element: <Article />,
      depth: 100,
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
  ];

  const location = useLocation();
  const navigationType = useNavigationType();

  const [from, setFrom] = useState<string>();
  const [slideMode, setSlideMode] = useState<string>("");
  let [reversed, setReversed] = useState<string>();

  const directionMap = [
    ["up", "down"],
    ["left", "right"],
  ];

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

    console.log(prevRoute);
    console.log(currentRoute);

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

    console.log(direction);

    if (direction) {
      setSlideMode(`slide-${direction}`);
    }

    setFrom(location.pathname);

    // if (navigationType === "PUSH") {
    //   setSlideMode(location.state ? location.state["transition"] : "");
    // } else {
    //   if (locationStack[locationStack.length - 2] === location.pathname) {
    //     setSlideMode(location.state ? location.state["transition"] : "");
    //   } else {
    //     if (reversed) {
    //       setSlideMode(reversed);
    //     } else {
    //       setSlideMode("");
    //     }
    //   }
    // }

    // setLocationStack([...locationStack, location.pathname]);

    // console.log("[effect]", reversed);
    // console.log("[effect]", slideMode);

    // console.log("[effect]", location);

    // if (location.state && location.state["transition"]) {
    //   const t: string = location.state["transition"];

    //   directionMap.forEach((d) => {
    //     if (t.includes(d[0])) {
    //       setReversed(t.replace(d[0], d[1]));
    //     } else if (t.includes(d[1])) {
    //       setReversed(t.replace(d[1], d[0]));
    //     }
    //   });
    // } else {
    //   setReversed(null);
    // }
  }, [location]);

  return (
    // <TransitionGroup
    //   className="transition-grouper relative w-full h-full bg-black"
    //   component={TransitionElement}
    //   childFactory={(child) => {
    //     // console.log(navigationType);
    //     let classNames;

    //     console.log("child", child);
    //     console.log("[child factory]", locationStack);
    //     console.log("[child factory] " + navigationType);
    //     console.log("[child factory] " + reversed);
    //     console.log("[child factory] " + slideMode);

    //     const state = location.state ? location.state["transition"] : null;
    //     if (navigationType === "PUSH") {
    //       classNames = state || "";
    //     } else {
    //       classNames = state || reversed || slideMode || "";
    //     }

    //     return React.cloneElement(child, {
    //       classNames,
    //       timeout: 1000,
    //     });
    //   }}
    // >
    <TransitionGroup
      className={`transition-grouper relative w-full h-full bg-black ${slideMode}`}
      component={TransitionElement}
    >
      <CSSTransition
        key={location.key}
        timeout={100000}
        classNames="route-animation"
      >
        <Routes location={location}>
          {/* <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/article/:category/:id" element={<Article />} />
          <Route path="/articles">
            <Route path=":category" element={<ArticleList />} />
            <Route path="" element={<ArticleList />} />
          </Route> */}
          {routes.map((r, i) => {
            // if (!r.child) {
            //   return <Route key={i} path={r.path} element={r.element} />;
            // } else {
            //   return (
            //     <Route key={i} path={r.path}>
            //       {r.child.map((c, idx) => {
            //         return (
            //           <Route key={idx} path={c.path} element={c.element} />
            //         );
            //       })}
            //     </Route>
            //   );
            // }
            return <Route key={i} path={r.path} element={r.element} />;
          })}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
