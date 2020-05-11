const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  // Define the location of the entry file of the application
  entry: ["webpack/hot/poll?100", ".src/index.ts"],
  watch: true,
  target: "node",
  externals: [
    nodeExternals({
      whitelist: ["webpack/hot/poll?"]
    })
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  mode: "development",
  // Define the loader that webpack needs to use to compile your source files: ts-loader for any files with the .ts or .tsx extensions
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  // Define the directory where webpack should store the compiled source files: a dist directory under the project directory
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  }
};
