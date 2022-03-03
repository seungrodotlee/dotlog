"use strict";
var _a;
exports.__esModule = true;
exports.toggleTheme = exports.setTheme = exports.ThemeSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initTheme;
if (localStorage.getItem("theme") === "dark" ||
    !localStorage.getItem("theme") ||
    window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
    initTheme = "dark";
}
else {
    document.documentElement.classList.remove("dark");
    initTheme = "light";
}
var changeTheme = function (data) {
    if (data === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
    else if (data === "light") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
    else {
        throw Error("Received wrong theme name!");
    }
};
var initialState = {
    theme: initTheme
};
exports.ThemeSlice = (0, toolkit_1.createSlice)({
    name: "theme",
    initialState: initialState,
    reducers: {
        toggleTheme: function (state) {
            state.theme = state.theme === "dark" ? "light" : "dark";
            changeTheme(state.theme);
        },
        setTheme: function (state, action) {
            state.theme = action.payload;
            changeTheme(state.theme);
        }
    }
});
exports.setTheme = (_a = exports.ThemeSlice.actions, _a.setTheme), exports.toggleTheme = _a.toggleTheme;
exports["default"] = exports.ThemeSlice.reducer;
