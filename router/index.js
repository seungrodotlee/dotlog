"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_transition_group_1 = require("react-transition-group");
var hooks_1 = require("../hooks");
var styled_components_1 = require("styled-components");
var Home_1 = require("../views/Home");
var ArticleList_1 = require("../views/ArticleList");
var CategoryList_1 = require("../views/CategoryList");
var Article_1 = require("../views/Article");
var TransitionElement = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var AppRouter = function () {
    var routes = [
        {
            path: "/",
            element: React.createElement(Home_1["default"], null),
            title: "dotlog",
            depth: 1
        },
        {
            path: "/articles",
            element: React.createElement(ArticleList_1["default"], null),
            title: "dotlog - 글 목록",
            depth: 10
        },
        {
            path: "/articles/:category",
            element: React.createElement(ArticleList_1["default"], null),
            title: "dotlog - +category+ 글 목록",
            depth: 10
        },
        {
            path: "/category",
            element: React.createElement(CategoryList_1["default"], null),
            title: "dotlog - 카테고리 목록",
            depth: 11
        },
        {
            path: "/category/:parent",
            element: React.createElement(CategoryList_1["default"], null),
            title: "dotlog - +parent+ 하위 카테고리 목록",
            depth: 11
        },
        {
            path: "/article/:category/:id",
            element: React.createElement(Article_1["default"], null),
            depth: 100
        },
    ];
    var location = (0, react_router_dom_1.useLocation)();
    var setTitle = (0, hooks_1.useTitle)("dotlog");
    var _a = (0, react_1.useState)(), from = _a[0], setFrom = _a[1];
    var _b = (0, react_1.useState)(""), slideMode = _b[0], setSlideMode = _b[1];
    (0, react_1.useEffect)(function () {
        var currentRoute, prevRoute;
        routes.forEach(function (r) {
            if ((0, react_router_dom_1.matchPath)({ path: r.path }, location.pathname)) {
                currentRoute = r;
            }
            if (from && (0, react_router_dom_1.matchPath)({ path: r.path }, from)) {
                prevRoute = r;
            }
        });
        if (currentRoute.title) {
            var paramsReg = /\:[a-zA-Z\-]*/g;
            var paramsRegResult = currentRoute.path.match(paramsReg);
            if (paramsRegResult) {
                var str = paramsRegResult.reduce(function (acc, curr) {
                    return acc.replace(curr, "([a-zA-Z-]*)");
                }, currentRoute.path);
                var extractReg = new RegExp(str);
                var extracted_1 = extractReg.exec(location.pathname);
                extracted_1.shift();
                var title = paramsRegResult.reduce(function (acc, curr, idx) {
                    return acc.replace("+".concat(curr.replace(":", ""), "+"), extracted_1[idx].replace("-", "/"));
                }, currentRoute.title);
                setTitle(title);
            }
            else {
                setTitle(currentRoute.title);
            }
        }
        var direction;
        if (prevRoute && prevRoute.depth < currentRoute.depth) {
            if (Math.pow(10, ("" + prevRoute.depth).length - 1) * 10 <=
                currentRoute.depth) {
                direction = "up";
            }
            else {
                direction = "left";
            }
        }
        else if (prevRoute && prevRoute.depth !== currentRoute.depth) {
            if (Math.pow(10, ("" + currentRoute.depth).length - 1) * 10 <=
                prevRoute.depth) {
                direction = "down";
            }
            else {
                direction = "right";
            }
        }
        if (direction) {
            setSlideMode("slide-".concat(direction));
        }
        else {
            setSlideMode(null);
        }
        setFrom(location.pathname);
    }, [location]);
    return (React.createElement(react_transition_group_1.TransitionGroup, { className: "transition-grouper relative w-full h-full bg-black ".concat(slideMode), component: TransitionElement },
        React.createElement(react_transition_group_1.CSSTransition, { key: location.key, timeout: 1000, classNames: "route-animation" },
            React.createElement(react_router_dom_1.Routes, { location: location }, routes.map(function (r, i) {
                return React.createElement(react_router_dom_1.Route, { key: i, path: r.path, element: r.element });
            })))));
};
exports["default"] = AppRouter;
var templateObject_1;
