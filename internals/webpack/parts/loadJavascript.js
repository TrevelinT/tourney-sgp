module.exports = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include,
        exclude,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
});
