"use strict";

const webpack = require("webpack");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
require("dotenv").config({ path: "./.env" });

module.exports = {
  mode: "development",
  entry: {
    app: "./client/main.js",
    generate: "./client/generate.js",
    dotnetify: "./src/dotnetify/index.js",
    "dotnetify-ko": "./src/dotnetify/knockout/index.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/wwwroot/dist",
    publicPath: "/dist/"
  },
  devtool: "source-map",
  resolve: {
    modules: ["src", "client", "node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
    alias: {
      vue: "@vue/runtime-dom",
      "styled-components": path.resolve(__dirname, "node_modules", "dotnetify-elements/node_modules/styled-components")
    }
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.vue$/, use: "vue-loader" },
      { test: /\.html$/, loader: "html-loader" },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader?minimize"] },
      { test: /\.svg$/, use: "svg-url-loader?noquotes=true" },
      { test: /\.(png|jpg|jpeg|gif)$/, use: "url-loader" },
      { test: /\.(eot|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/, loader: "url-loader" }
    ]
  },
  externals: {
    dotnetify: "dotnetify",
    "dotnetify-elements": "dotNetifyElements",
    knockout: "ko",
    react: "React",
    "react-dom": "ReactDOM",
    "styled-components": "styled",
    vue: "Vue"
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
    new webpack.DefinePlugin({ "process.env": JSON.stringify(process.env) }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new CopyPlugin([{ from: "node_modules/dotnetify-elements/lib/dotnetify-elements.bundle.js" }])
  ]
};
