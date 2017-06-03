var webpack = require('webpack');
var HappyPack = require('happypack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var DashboardPlugin = require('webpack-dashboard/plugin');
var path = require('path')

module.exports = {
  entry: {
    'app': './src/app.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel', 'eslint' ],
        exclude: /(node_modules)/,
        happy: { id: 'js' }
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('public/app.css', {
        allChunks: true
    }),
    new DashboardPlugin()
  ]
};
