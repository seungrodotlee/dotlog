import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initTheme;

if (
  localStorage.getItem("theme") === "dark" ||
  !localStorage.getItem("theme") ||
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.classList.add("dark");
  initTheme = "dark";
} else {
  document.documentElement.classList.remove("dark");
  initTheme = "light";
}

const changeTheme = (data: string) => {
  if (data === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else if (data === "light") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    throw Error("Received wrong theme name!");
  }
};

interface IThemeState {
  theme: string;
}

const initialState: IThemeState = {
  theme: initTheme,
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";

      changeTheme(state.theme);
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;

      changeTheme(state.theme);
    },
  },
});

export const { setTheme, toggleTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
