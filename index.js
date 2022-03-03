"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var store_1 = require("./store");
var App_1 = require("./App");
require("./styles/reset.css");
require("./styles/index.scss");
var serviceWorker = require("./serviceWorker");
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store_1.store },
    React.createElement(react_router_dom_1.BrowserRouter, { basename: process.env.PUBLIC_URL },
        React.createElement(App_1["default"], null))), document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
