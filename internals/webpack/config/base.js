const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkIsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const paths = require("../../config/paths");
const loadJavascript = require("../parts/loadJavascript");

module.exports = merge([
  {
    entry: {
      bundle: "./app/index.tsx",
    },
    output: {
      filename: "[name].js",
      publicPath: "/",
      path: paths.build,
    },
    resolve: {
      modules: [paths.source, "node_modules"],
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        meta: {
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
      }),
      new ForkIsCheckerWebpackPlugin(),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  loadJavascript({ exclude: /node_modules/ }),
]);
