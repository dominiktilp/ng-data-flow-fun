var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, "./src/"),
  entry: {
    app: ['webpack-dev-server/client?http://localhost:8881', 'webpack/hot/only-dev-server', "./app.js"],
  },

  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "./build"),
    publicPath:  '/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
            presets: ['es2015']
        }
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"]
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "cheap-source-map"
}
