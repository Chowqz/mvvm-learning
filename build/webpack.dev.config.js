const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devMode = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    miniVue: path.resolve(__dirname, "../src/examples/mini-vue.js"),
    miniReact: path.resolve(__dirname, "../src/examples/mini-react.jsx"),
    fiberReact: path.resolve(__dirname, "../src/examples/fiber-react.jsx"),
    fiberReactV2: path.resolve(__dirname, "../src/examples/fiber-demo.jsx"),
  },
  output: {
    filename: "[name].js",
    // filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset",
        generator: {
          filename: "static/images/[name].[contenthash:8][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset",
        generator: {
          filename: "static/fonts/[name].[contenthash:8][ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
        type: "asset",
        generator: {
          filename: "static/media/[name].[contenthash:8][ext]",
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".js", ".tsx", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "mini-vue.html",
      template: path.resolve(__dirname, "../public/mini-vue.html"),
      inject: true,
      // publicPath: "/",
      chunks: ["miniVue"],
    }),
    new HtmlWebpackPlugin({
      filename: "mini-react.html",
      template: path.resolve(__dirname, "../public/mini-react.html"),
      inject: true,
      // publicPath: "/",
      chunks: ["miniReact"],
    }),
    new HtmlWebpackPlugin({
      filename: "fiber-react.html",
      template: path.resolve(__dirname, "../public/mini-react.html"),
      inject: true,
      // publicPath: "/",
      chunks: ["fiberReact"],
    }),
    new HtmlWebpackPlugin({
      filename: "fiber-demo.html",
      template: path.resolve(__dirname, "../public/mini-react.html"),
      inject: true,
      // publicPath: "/",
      chunks: ["fiberReactV2"],
    }),
  ],
  cache: {
    type: "filesystem",
  },
  mode: "development",
  devServer: {
    host: "0.0.0.0",
    port: 3006,
    hot: true,
  },
  devtool: "eval-cheap-module-source-map",
};
