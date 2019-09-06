module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: "last 2 versions",
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
    "@emotion/babel-preset-css-prop",
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "react-hot-loader/babel",
  ],
};
