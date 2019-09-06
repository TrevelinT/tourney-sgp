const merge = require("webpack-merge");
const base = require("./base");
const extractCss = require("../parts/extractCss");
const minifyCss = require("../parts/minifyCss");
const generateSourceMaps = require("../parts/generateSourceMaps");

module.exports = merge([
  base,
  extractCss({ use: "css-loader" }),
  minifyCss(),
  generateSourceMaps("hidden-source-map"),
]);
