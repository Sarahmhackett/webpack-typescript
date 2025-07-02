const path = require("path");

module.exports = {
  entry: "./src/index.ts", // where to enter and start bundling
  mode: "development", // set the mode to development (default is prod)
  devtool: "inline-source-map", // create a source map to help with debugging
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // look for all files with a .ts extension or .tsx extension
        use: "ts-loader", // use the ts-loader to transpile the files
        exclude: /node_modules/, // exclude the node_modules folder
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // look for all files with a .ts extension or .tsx extension or .js extension
  },
  output: {
    filename: "bundle.js", // make us a file called bundle.js
    path: path.resolve(__dirname, "dist"), // path to the output directory
    publicPath: "/dist", // path to the output directory
  },
};
