"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var theme_1 = require("./modules/theme");
var article_1 = require("./modules/article");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        theme: theme_1["default"],
        article: article_1["default"]
    }
});
