"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.ArticleSlice = exports.fetchArticleList = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var showdown_1 = require("showdown");
var articles_1 = require("../../articles");
var markdownConverter = new showdown_1["default"].Converter();
var initialState = {
    article: null
};
exports.fetchArticleList = (0, toolkit_1.createAsyncThunk)("article/fetchArticleList", function (_, _a) {
    var getState = _a.getState;
    return __awaiter(void 0, void 0, void 0, function () {
        var article, callback, entries, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    article = getState().article.article;
                    if (article)
                        return [2 /*return*/, article];
                    callback = function (acc, curr) { return __awaiter(void 0, void 0, void 0, function () {
                        var result, sub, reduced, pack, pack, d, fetched, text, html, reg, filename, category;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, acc.then()];
                                case 1:
                                    result = _a.sent();
                                    if (!(typeof curr[1] === "object")) return [3 /*break*/, 3];
                                    sub = Object.entries(curr[1]);
                                    return [4 /*yield*/, sub
                                            .map(function (s) { return ["".concat(curr[0], "/").concat(s[0]), s[1]]; })
                                            .reduce(callback, Promise.resolve({}))];
                                case 2:
                                    reduced = _a.sent();
                                    pack = __assign(__assign({}, result), reduced);
                                    return [2 /*return*/, pack];
                                case 3:
                                    pack = __assign({}, result);
                                    d = curr[1];
                                    return [4 /*yield*/, fetch(d)];
                                case 4:
                                    fetched = _a.sent();
                                    return [4 /*yield*/, fetched.text()];
                                case 5:
                                    text = _a.sent();
                                    html = markdownConverter.makeHtml(text);
                                    reg = /\/([^\/]*)$/g;
                                    filename = reg.exec(curr[0])[1];
                                    category = curr[0].replace("/" + filename, "");
                                    pack[category] = pack[category] || {};
                                    pack[category][filename] = html;
                                    return [2 /*return*/, Promise.resolve(pack)];
                            }
                        });
                    }); };
                    entries = Object.entries(articles_1["default"]);
                    return [4 /*yield*/, entries.reduce(callback, Promise.resolve({}))];
                case 1:
                    result = _b.sent();
                    return [2 /*return*/, result];
            }
        });
    });
});
exports.ArticleSlice = (0, toolkit_1.createSlice)({
    name: "article",
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder.addCase(exports.fetchArticleList.fulfilled, function (state, action) {
            state.article = action.payload;
        });
    }
});
exports["default"] = exports.ArticleSlice.reducer;
