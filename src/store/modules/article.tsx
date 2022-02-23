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

  // const result = {};

  // for (let k in ArticleList) {
  //   const data = ArticleList[k];
  //   result[k] = {};

  //   for (let key in data) {
  //     const d = data[key];
  //     console.log("d", d);

  //     const fetched = await fetch(d);
  //     const text = await fetched.text();

  //     const html: string = markdownConverter.makeHtml(text);

  //     result[k][key] = html;
  //   }
  // }

  const callback = async (acc, curr, idx, origin) => {
    const result = await acc.then();
    console.log("acc", result);
    console.log("curr", curr);
    if (typeof curr[1] === "object") {
      const sub = Object.entries(curr[1]);

      console.log("sub", sub);

      const reduced = await sub
        .map((s) => [`${curr[0]}/${s[0]}`, s[1]])
        .reduce(callback, Promise.resolve({}));

      const pack = { ...result, ...reduced };

      console.log("pack", pack);
      return pack;
    } else {
      const pack = { ...result };

      const d = curr[1];
      const fetched = await fetch(d);
      const text = await fetched.text();

      const html: string = markdownConverter.makeHtml(text);

      const reg = /\/([^\/]*)$/g;
      const filename = reg.exec(curr[0])[1];
      const category = curr[0].replace("/" + filename, "");
      console.log("fn", filename);

      pack[category] = pack[category] || {};

      pack[category][filename] = html;

      console.log("pack", pack);

      return Promise.resolve(pack);
    }
  };

  const entries = Object.entries(ArticleList);

  console.log("entries", entries);
  const result = await entries.reduce(callback, Promise.resolve({}));

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
