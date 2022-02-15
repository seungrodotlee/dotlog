const fs = require("fs");
const chokidar = require("chokidar");
const articleFolder = "./src/articles";

const watcher = chokidar.watch(articleFolder, {
  persistent: true,
  ignore: "src/articles/index.tsx",
  ignoreInitial: true,
});

let triggerTimer;
watcher.on("unlink", () => {
  if (triggerTimer) {
    clearTimeout(triggerTimer);
    generate();
  } else {
    generate();
  }
});

watcher.on("add", () => {
  triggerTimer = setTimeout(() => {
    generate();
  }, 100);
});

const generate = async () => {
  let importSection = "";
  let exportSection = "export default {\n";

  const categoryList = await fs.promises.readdir(articleFolder);

  const categories = categoryList.filter((c) => !c.includes("."));

  for (let c of categories) {
    exportSection += `  ${c}: {\n`;
    const articleList = await fs.promises.readdir(`${articleFolder}/${c}`);

    const articles = articleList.filter((a) => a.includes(".md"));

    articles.forEach((a) => {
      const title = a.replace(".md", "");

      importSection += `import ${title} from "./${c}/${a}"\n`;
      exportSection += `    ${title},\n`;
    });
    exportSection += "  },\n";
  }
  exportSection += "}";

  const code = `${importSection}\n${exportSection}`;

  fs.writeFile("./src/articles/index.tsx", code, "utf8", (err) => {
    if (err) {
      console.error(err.stack);
    } else {
      console.log("write src/articles/index.tsx");
    }
  });
};
