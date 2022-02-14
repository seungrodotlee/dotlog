import Test from "./markdown/test.md";

export const MarkdownList = {
  Test,
};

export const getArticle = (id) => {
  return new Promise(async (res, rej) => {
    try {
      const fetched = await fetch(MarkdownList[id]);
      const text = await fetched.text();

      res(text);
    } catch (e) {
      rej(e);
    }
  });
};
