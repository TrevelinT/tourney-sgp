const merge = require("webpack-merge");
const developmentConfig = require("./internals/webpack/config/dev");
const productionConfig = require("./internals/webpack/config/prod");

module.exports = mode => {
  if (mode === "production") {
    return merge(productionConfig, { mode });
  }

  return merge(developmentConfig, { mode });
};
