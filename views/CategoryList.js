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
var hooks_1 = require("../store/hooks");
var article_1 = require("../store/modules/article");
var AspectRatio_1 = require("../components/AspectRatio");
var CategoryList = function () {
    var params = (0, react_router_dom_1.useParams)();
    var article = (0, hooks_1.useAppSelector)(function (state) { return state.article.article; });
    var dispatch = (0, hooks_1.useAppDispatch)();
    var _a = (0, react_1.useState)([]), category = _a[0], setCategory = _a[1];
    var _b = (0, react_1.useState)([]), subCateogry = _b[0], setSubCateogry = _b[1];
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
        var keys = Object.keys(article);
        if (params.parent) {
            setCategory(keys.filter(function (k) { return k.includes(params.parent); }));
        }
        else {
            setCategory(keys.filter(function (k) { return !k.includes("/"); }));
            setSubCateogry(keys.filter(function (k) { return k.includes("/"); }));
        }
    }, [article]);
    return (React.createElement("div", { className: "w-full h-full" },
        React.createElement("div", { className: "container grid grid-cols-5 gap-3" }, category.map(function (c, i) {
            return (React.createElement(AspectRatio_1["default"], { key: i, base: "w", ratio: "1/1" },
                React.createElement(react_router_dom_1.Link, { to: !params.parent && subCateogry.find(function (s) { return s.includes(c); })
                        ? "/category/".concat(c)
                        : "/articles/".concat(c.replace("/", "-")), className: "flex-center flex-col relative rounded-2xl bg-neutral-900" },
                    c,
                    !params.parent && subCateogry.find(function (s) { return s.includes(c); }) && (React.createElement("p", { className: "absolute w-full text-center bottom-4 text-xs font-bold text-neutral-500" }, "\uD558\uC704 \uCE74\uD14C\uACE0\uB9AC\uAC00 \uC788\uC5B4\uC694!")))));
        }))));
};
exports["default"] = CategoryList;
