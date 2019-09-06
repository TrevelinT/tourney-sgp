const path = require("path");

// To solve the problem of relative paths we opted to get the absolute path
// always based on the paths folder, so we can change only one place if the
// file is moved to another destination.
// There is not much concerns about webpack bundling this file because we don't use
// in the client, only for building purposes
// https://stackoverflow.com/questions/10265798/determine-project-root-from-a-running-node-js-application
const resolveDirname = relativePath =>
  path.resolve(__dirname, "../../", relativePath);

const paths = {
  build: resolveDirname("dist"),
  config: resolveDirname("config"),
  source: resolveDirname("app"),
  root: resolveDirname("."),
};

module.exports = paths;
