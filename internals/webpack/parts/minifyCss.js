const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = () => ({
  plugins: [new OptimizeCssAssetsPlugin()],
});
