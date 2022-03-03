"use strict";
exports.__esModule = true;
var React = require("react");
var router_1 = require("./router");
var Header_1 = require("./components/Header");
var App = function () {
    return (React.createElement("div", { className: "app w-full h-full flex flex-col overflow-hidden" },
        React.createElement(Header_1["default"], null),
        React.createElement("main", { className: "main flex-grow w-full max-h-full" },
            React.createElement(router_1["default"], null))));
};
exports["default"] = App;
