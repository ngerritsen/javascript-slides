const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './client/main.js'
  ],
  output: {
    path: 'public',
    publicPath: '/public',
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Javascript slides',
      filename: 'index.html',
      template: './client/index.html',
      favicon: './client/favicon.png',
      inject: true,
      hash: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('style.css')
  ]
}

if (process.env.NODE_ENV === 'development') {
  config.watch = true
  config.devtool = 'source-map'
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = config
