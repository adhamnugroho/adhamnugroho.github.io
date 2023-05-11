const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 9000,
    liveReload: true,
  },
  output: {
    path: path.resolve(__dirname, "dist-dev"),
    filename: "js/[name].js",
    assetModuleFilename: "[path]/[name][ext]",
    clean: true,
  },
  optimization: {
    minimize: true,
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: false,
});
