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

console.log("article exporter is now running...");
console.log(
  "since now, we will automatically modify './src/article/index.tsx' when you create or delete, rename articles under './src/articles/SOME-FOLDERS'"
);

const generate = async () => {
  let importSection = "";
  let exportSection = "const articles = {\n";

  const scanDirectory = (root, name, depth) => {
    return new Promise(async (res, rej) => {
      const folder = `${root}/${name}`;

      const list = await fs.promises.readdir(folder);

      const subFolders = list.filter((l) => !l.includes("."));
      const articles = list.filter((l) => l.includes(".md"));

      if (depth > 0) {
        for (let i = 0; i < depth * 2; i++) {
          exportSection += " ";
        }

        exportSection += `${name}: {\n`;
      }

      if (subFolders) {
        for (let idx in subFolders) {
          const f = subFolders[idx];

          await scanDirectory(folder, f, depth + 1);
        }
      }

      if (articles) {
        articles.forEach((a) => {
          const title = a.replace(".md", "");

          importSection += `import ${title} from "${folder.replace(
            "./src/articles",
            "."
          )}/${a}";\n`;

          for (let i = 0; i < (depth + 1) * 2; i++) {
            exportSection += " ";
          }

          exportSection += `${title},\n`;
        });
      }

      for (let i = 0; i < depth * 2; i++) {
        exportSection += " ";
      }

      if (depth > 0) {
        exportSection += `},\n`;
      }

      res();
    });
  };

  await scanDirectory("./src", "articles", 0);

  exportSection += "};";

  const code = `${importSection}\n${exportSection}\n\nexport default articles;`;

  fs.writeFile("./src/articles/index.tsx", code, "utf8", (err) => {
    if (err) {
      console.error(err.stack);
    } else {
      console.log("write src/articles/index.tsx");
    }
  });
};
