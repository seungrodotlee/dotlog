import react from "./react";
import Showdown from "showdown";

const markdownConverter = new Showdown.Converter();

export default { react };

// export const useArticleList = async () => {
//   const keys = Object.keys(ArticleList);
//   const result = {};

//   keys.forEach((k) => {
//     const data = ArticleList[k];
//     result[k] = {};

//     data.forEach(async (d) => {
//       const key = Object.keys(d[1])[0];
//       const fetched = await fetch(d[1][key]);
//       const text = await fetched.text();

//       const pack = {
//         title: d[0],
//         html: markdownConverter.makeHtml(text),
//       };

//       result[k][key] = pack;
//     });
//   });

//   console.log(result);

//   return result;
// };
