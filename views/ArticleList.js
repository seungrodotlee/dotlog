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
var hooks_1 = require("../store/hooks");
var article_1 = require("../store/modules/article");
var noise_svg_1 = require("../assets/img/noise.svg");
var Noise = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: url(", ") 0 0 repeat;\n  background-position: center;\n\n  animation: bg-animation 1.5s steps(6) infinite;\n\n  @keyframes bg-animation {\n    0%,\n    100% {\n      transform: translate(0, 0);\n    }\n    10% {\n      transform: translate(-5%, -10%);\n    }\n    30% {\n      transform: translate(3%, -15%);\n    }\n    50% {\n      transform: translate(12%, 9%);\n    }\n    70% {\n      transform: translate(9%, 4%);\n    }\n    90% {\n      transform: translate(-1%, 7%);\n    }\n  }\n"], ["\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: url(", ") 0 0 repeat;\n  background-position: center;\n\n  animation: bg-animation 1.5s steps(6) infinite;\n\n  @keyframes bg-animation {\n    0%,\n    100% {\n      transform: translate(0, 0);\n    }\n    10% {\n      transform: translate(-5%, -10%);\n    }\n    30% {\n      transform: translate(3%, -15%);\n    }\n    50% {\n      transform: translate(12%, 9%);\n    }\n    70% {\n      transform: translate(9%, 4%);\n    }\n    90% {\n      transform: translate(-1%, 7%);\n    }\n  }\n"])), noise_svg_1["default"]);
var Overlay = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  mix-blend-mode: multiply;\n"], ["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  mix-blend-mode: multiply;\n"])));
var ArticleList = function () {
    var location = (0, react_router_dom_1.useLocation)();
    var params = (0, react_router_dom_1.useParams)();
    var article = (0, hooks_1.useAppSelector)(function (state) { return state.article.article; });
    var dispatch = (0, hooks_1.useAppDispatch)();
    var _a = (0, react_1.useState)([]), generated = _a[0], setGenerated = _a[1];
    var _b = (0, react_1.useState)([]), category = _b[0], setCategory = _b[1];
    var onMounted = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dispatch((0, article_1.fetchArticleList)())];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        onMounted();
    }, []);
    (0, react_1.useEffect)(function () {
        if (!article)
            return;
        setCategory(Object.keys(article));
        var list = [];
        var pushToList = function (c) {
            if (params.category && !c.includes(params.category.replace("-", "/"))) {
                return;
            }
            var data = article[c];
            for (var key in data) {
                var d = data[key];
                var el = document.createElement("div");
                el.innerHTML = d;
                var titleElement = el.querySelector("h1");
                if (!titleElement)
                    continue;
                var title = titleElement.textContent;
                var subtitle = el.querySelector("h2");
                var text = subtitle ? subtitle.textContent : "";
                list.push({
                    path: "/article/".concat(c.replace("/", "-"), "/").concat(key),
                    title: title,
                    category: c,
                    content: text
                });
            }
        };
        for (var cate in article) {
            pushToList(cate);
        }
        setGenerated(list);
    }, [article]);
    return (React.createElement("div", { className: "w-full h-full flex-col" },
        React.createElement("div", { className: "container relative" },
            React.createElement("div", { className: "relative !px-0 rounded-3xl overflow-hidden mb-36" },
                React.createElement(Noise, null),
                React.createElement(Overlay, { className: "bg-gradient-to-b from-neutral-700 to-neutral-400 min-h-screen" }),
                React.createElement("div", { className: "divide-y-2 divide-neutral-700 px-6" }, generated.map(function (g) {
                    return (React.createElement(react_router_dom_1.Link, { to: g.path, key: g.title, className: "flex flex-col article relative py-4 opacity-60 hover:opacity-100 transition-opacity duration-500", state: { transition: "page-slide-up" } },
                        React.createElement("p", { className: "text-sm font-thin" }, g.category),
                        React.createElement("h3", { className: "text-[2.25rem] font-black" }, g.title),
                        g.content ? (React.createElement("p", { className: "font-bold" }, g.content)) : (React.createElement("p", { className: "font-bold" }, "\uBD80\uC81C\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4 :("))));
                }))),
            React.createElement("div", { className: "affix flex flex-col absolute left-full top-2 whitespace-nowrap" },
                React.createElement(react_router_dom_1.Link, { to: "/articles", className: "font-bold text-sm ".concat(location.pathname === "/articles" ? "opacity-100" : "opacity-60", " hover:opacity-100 transition-opacity duration-500") }, "\uBAA8\uB4E0 \uAE00 \uBCF4\uAE30"),
                category.map(function (c, i) {
                    return (React.createElement(react_router_dom_1.Link, { to: "/articles/".concat(c.replace("/", "-")), key: i, className: "font-bold text-sm ".concat(location.pathname === "/articles/".concat(c.replace("/", "-"))
                            ? "opacity-100"
                            : "opacity-60", " hover:opacity-100 transition-opacity duration-500") }, c));
                }),
                category.length > 8 ? (React.createElement(react_router_dom_1.Link, { to: "/category", className: "font-bold text-sm opacity-60 hover:opacity-100 transition-opacity duration-500" },
                    category.length - 8,
                    "\uAC1C\uC758 \uCE74\uD14C\uACE0\uB9AC \uB354 \uBCF4\uB7EC\uAC00\uAE30")) : (React.createElement(react_router_dom_1.Link, { to: "/category", className: "font-bold text-sm opacity-60 hover:opacity-100 transition-opacity duration-500" }, "\uCE74\uD14C\uACE0\uB9AC \uC804\uCCB4 \uBCF4\uB7EC\uAC00\uAE30"))))));
};
exports["default"] = ArticleList;
var templateObject_1, templateObject_2;
