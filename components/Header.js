"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var styled_components_1 = require("styled-components");
var utils_1 = require("../helpers/utils");
var geul_1 = require("geul");
var Dot = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  animation: dot 1.5s both cubic-bezier(0.8, 0, 0.2, 1);\n  animation-delay: 0.3s;\n\n  @keyframes dot {\n    from {\n      transform: scale(0);\n    }\n\n    to {\n      transform: scale(1);\n    }\n  }\n"], ["\n  animation: dot 1.5s both cubic-bezier(0.8, 0, 0.2, 1);\n  animation-delay: 0.3s;\n\n  @keyframes dot {\n    from {\n      transform: scale(0);\n    }\n\n    to {\n      transform: scale(1);\n    }\n  }\n"])));
var Header = function () {
    var location = (0, react_router_dom_1.useLocation)();
    var headerLabelElement = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), headerActived = _a[0], setHeaderActived = _a[1];
    var headerBlackList = ["/"];
    var typeHeaderLabel = function () { return __awaiter(void 0, void 0, void 0, function () {
        var headerLabel;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, utils_1.delay)(2300)];
                case 1:
                    _a.sent();
                    headerLabel = new geul_1["default"]("log", headerLabelElement.current, 100);
                    return [4 /*yield*/, headerLabel.run()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var onMount = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!headerActived)
                return [2 /*return*/];
            return [2 /*return*/];
        });
    }); };
    (0, react_1.useEffect)(function () {
        onMount();
    }, []);
    (0, react_1.useEffect)(function () {
        if (!headerActived && !headerBlackList.includes(location.pathname)) {
            setHeaderActived(true);
            typeHeaderLabel();
        }
    }, [location]);
    return (React.createElement("div", null, headerActived && (React.createElement("header", { className: "w-full" },
        React.createElement("div", { className: "flex justify-between container py-4" },
            React.createElement(react_router_dom_1.Link, { to: "/articles", className: "logo flex items-center" },
                React.createElement(Dot, { className: "w-4 h-4 bg-white rounded-full" }),
                React.createElement("p", { ref: headerLabelElement, className: "text-xl font-bold ml-[3px]" }, "\u00A0")))))));
};
exports["default"] = Header;
var templateObject_1;
