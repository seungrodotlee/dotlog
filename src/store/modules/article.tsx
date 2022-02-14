import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import Showdown from "showdown";
import ArticleList from "../../articles";
import { RootState, AppDispatch } from "..";

const markdownConverter = new Showdown.Converter();

type ArticleType = {
  [key in string]: {
    [key2 in string]: { title: string; html: string };
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

  const keys = Object.keys(ArticleList);
  const result = {};

  for (let i in keys) {
    const k = keys[i];

    const data = ArticleList[k];
    result[k] = {};

    for (let idx in data) {
      const d = data[idx];

      const key = Object.keys(d[1])[0];
      const fetched = await fetch(d[1][key]);
      const text = await fetched.text();

      const html: string = markdownConverter.makeHtml(text);

      const pack = {
        title: d[0],
        html,
      };

      result[k][key] = pack;
    }
  }

  console.log(result);

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
