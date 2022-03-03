"use strict";
exports.__esModule = true;
exports.useTitle = void 0;
var react_1 = require("react");
var useTitle = function (initial) {
    var _a = (0, react_1.useState)(initial), title = _a[0], setTitle = _a[1];
    var updateTitle = function () {
        var titleElement = document.querySelector("title");
        titleElement.textContent = title;
    };
    (0, react_1.useEffect)(updateTitle, [title]);
    return setTitle;
};
exports.useTitle = useTitle;
