"use strict";
exports.__esModule = true;
exports.useAppSelector = exports.useAppDispatch = void 0;
var react_redux_1 = require("react-redux");
var useAppDispatch = function () { return (0, react_redux_1.useDispatch)(); };
exports.useAppDispatch = useAppDispatch;
exports.useAppSelector = react_redux_1.useSelector;
