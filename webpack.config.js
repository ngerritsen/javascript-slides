const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: './src/main.js',
  output: {
    path: 'public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.md$/,
        loader: 'raw'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Javascript slides',
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      hash: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('style.css')
  ]
}

module.exports = config
