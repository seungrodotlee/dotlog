"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var AspectRatio = function (_a) {
    var children = _a.children, base = _a.base, ratio = _a.ratio;
    var aspectRatioRoot = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var child = aspectRatioRoot.current.querySelector(":scope > *");
        var size, origin, target;
        origin = base === "w" ? "width" : "height";
        target = base === "w" ? "height" : "width";
        var seperated = ratio.split("/");
        var numerater = parseInt(seperated[0]);
        var denominator = parseInt(seperated[1]);
        size = child.getBoundingClientRect()[origin] * (numerater / denominator);
        child.setAttribute("style", "".concat(target, ": ").concat(size, "px"));
    }, [aspectRatioRoot]);
    return React.createElement("div", { ref: aspectRatioRoot }, children);
};
exports["default"] = AspectRatio;
