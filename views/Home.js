"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var utils_1 = require("../helpers/utils");
var geul_1 = require("geul");
var Home = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var sqrt = Math.sqrt, pow = Math.pow, ceil = Math.ceil;
    var logLabelElement = (0, react_1.useRef)(null);
    /** dot animation */
    var diag = sqrt(pow(window.innerHeight, 2) + pow(window.innerWidth, 2));
    var dotSize = ceil(diag / (16 * 13)) * 13;
    var ratio = 1 / ceil(dotSize / 13);
    var dotShrinkDuration = 5000;
    var _a = (0, react_1.useState)({
        width: "".concat(dotSize, "rem"),
        height: "".concat(dotSize, "rem"),
        transform: "scale(1)",
        transitionDuration: "".concat(dotShrinkDuration, "ms")
    }), dotStyle = _a[0], setDotStyle = _a[1];
    /** fade animation */
    var _b = (0, react_1.useState)(false), faded = _b[0], setFaded = _b[1];
    var onMounted = function () { return __awaiter(void 0, void 0, void 0, function () {
        var logLabel;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (localStorage.getItem("intro") === "Y") {
                        navigate("/articles");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, utils_1.delay)(1000)];
                case 1:
                    _a.sent();
                    setDotStyle((0, utils_1.changeObjectMembers)(dotStyle, {
                        transform: "scale(".concat(ratio, ")")
                    }));
                    return [4 /*yield*/, (0, utils_1.delay)(dotShrinkDuration + 1000)];
                case 2:
                    _a.sent();
                    setDotStyle((0, utils_1.changeObjectMembers)(dotStyle, {
                        width: "13rem",
                        height: "13rem",
                        transform: "scale(1)",
                        transition: "none"
                    }));
                    logLabel = new geul_1["default"]("log", logLabelElement.current, 100);
                    return [4 /*yield*/, logLabel.run()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, utils_1.delay)(3000)];
                case 4:
                    _a.sent();
                    setFaded(true);
                    return [4 /*yield*/, (0, utils_1.delay)(500)];
                case 5:
                    _a.sent();
                    localStorage.setItem("intro", "Y");
                    navigate("/articles");
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        onMounted();
    }, []);
    return (React.createElement("div", { className: "w-full h-full flex-center flex-col overflow-hidden" },
        React.createElement("div", { className: "flex items-center transition duration-500 ".concat(faded ? "opacity-0 transform -translate-y-12" : "") },
            localStorage.getItem("intro") !== "Y" && (React.createElement("div", { className: "dot bg-foreground rounded-full transition-transform ease-both-xl", style: dotStyle })),
            React.createElement("p", { ref: logLabelElement, className: "font-black text-[16rem] ml-2" }, "\u00A0"))));
};
exports["default"] = Home;
