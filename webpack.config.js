const { stat } = require("fs");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname) + "/dist/assets/",
    filename: "bundle.js",
    publicPath: "/assets/",
  },
  devServer: {
    // contentBase: path.resolve(__dirname) + "/dist",
    // contentBase: path.resulve(__dirname, "dist"),
    static: path.resolve(__dirname, "dist"),
    // publicPath: "/assets/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
