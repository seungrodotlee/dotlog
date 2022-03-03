"use strict";
exports.__esModule = true;
var file2_md_1 = require("./dotlog/somefolder/file2.md");
var beginning_md_1 = require("./dotlog/beginning.md");
var about_md_1 = require("./react/about.md");
var base_md_1 = require("./react/base.md");
var jsx_md_1 = require("./react/jsx.md");
var articles = {
    dotlog: {
        somefolder: {
            file2: file2_md_1["default"]
        },
        beginning: beginning_md_1["default"]
    },
    react: {
        about: about_md_1["default"],
        base: base_md_1["default"],
        jsx: jsx_md_1["default"]
    }
};
exports["default"] = articles;
