import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import Showdown from "showdown";
import ArticleList from "../../articles";
import { RootState, AppDispatch } from "..";

const markdownConverter = new Showdown.Converter();

type ArticleType = {
  [key in string]: {
    [key2 in string]: string;
  };
};

const initialState: { article: ArticleType } = {
  article: null,
};

export const fetchArticleList = createAsyncThunk<
  ArticleType,
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("article/fetchArticleList", async (_, { getState }) => {
  const { article } = getState().article;

  if (article) return article;

  const callback = async (acc: Promise<object>, curr) => {
    const result = await acc.then();
    if (typeof curr[1] === "object") {
      const sub = Object.entries(curr[1]) as [string, string | object][];

      const reduced = await sub
        .map((s) => [`${curr[0]}/${s[0]}`, s[1]])
        .reduce(callback, Promise.resolve({}));

      const pack = { ...result, ...reduced };

      return pack;
    } else {
      const pack = { ...result };

      const d: string = curr[1];
      const fetched = await fetch(d);
      const text = await fetched.text();

      const html: string = markdownConverter.makeHtml(text);

      const reg = /\/([^\/]*)$/g;
      const filename = reg.exec(curr[0])[1];
      const category: string = curr[0].replace("/" + filename, "");

      pack[category] = pack[category] || {};

      pack[category][filename] = html;

      return Promise.resolve(pack);
    }
  };

  const entries = Object.entries(ArticleList);

  const result = await entries.reduce(callback, Promise.resolve({}));

  return result;
});

export const ArticleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleList.fulfilled, (state, action) => {
      state.article = action.payload;
    });
  },
});

export default ArticleSlice.reducer;
