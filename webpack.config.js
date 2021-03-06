var path = require('path');
var webpack = require('webpack');
require('dotenv').config();
module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  stats: {
    colors: true
  },
  devServer: {
    host: process.env.HOST,
    port: process.env.PORT,
    contentBase: path.join(__dirname, '/build'),
    watchContentBase: true
  },
  devtool: 'source-map'
};
