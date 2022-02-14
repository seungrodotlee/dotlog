import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./modules/theme";
import ArticleReducer from "./modules/article";

export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    article: ArticleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
