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

  const result = {};

  for (let k in ArticleList) {
    const data = ArticleList[k];
    result[k] = {};

    for (let key in data) {
      const d = data[key];

      const fetched = await fetch(d);
      const text = await fetched.text();

      const html: string = markdownConverter.makeHtml(text);

      result[k][key] = html;
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
