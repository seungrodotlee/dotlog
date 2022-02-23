import file2 from "./dotlog/somefolder/file2.md";
import beginning from "./dotlog/beginning.md";
import about from "./react/about.md";
import base from "./react/base.md";
import jsx from "./react/jsx.md";

const articles = {
  dotlog: {
    somefolder: {
      file2,
    },
    beginning,
  },
  react: {
    about,
    base,
    jsx,
  },
};

export default articles;