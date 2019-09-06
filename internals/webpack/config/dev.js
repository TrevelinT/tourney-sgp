const merge = require("webpack-merge");
const base = require("./base");
const loadCss = require("../parts/loadCss");
const generateSourceMaps = require("../parts/generateSourceMaps");
const enableHotLoaderFeatures = require("../parts/enableHotLoaderFeatures");

module.exports = merge([
  base,
  loadCss(),
  generateSourceMaps("cheap-module-eval-source-map"),
  enableHotLoaderFeatures(),
]);
