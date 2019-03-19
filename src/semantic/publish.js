const fs = require("fs");
const path = require("path");
const pkg = require("../../package.json");

const packageJson = JSON.stringify(
  {
    name: "@sfu/semantic-ui-css-sfu",
    version: pkg.version,
    description: "Semantic UI CSS-only theme for SFU CLF",
    author: "Graham Ballantyne <grahamb@sfu.ca>",
    main: "semantic.js",
    license: "MIT",
    repository: {
      type: "git",
      url: "git://github.com/sfu/semantic-ui-css-sfu"
    },
    dependencies: {},
    devDependencies: {}
  },
  null,
  2
);

console.log("Creating dist/package.json");
fs.writeFileSync(path.resolve(__dirname, "dist/package.json"), packageJson);

console.log("Copying readme");
fs.copyFileSync(
  path.resolve(__dirname, "../../README.md"),
  path.resolve(__dirname, "dist/README.md")
);
