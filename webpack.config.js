var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './webpack.entry',
  output: {
    filename: 'cms.js',
    path: path.join(__dirname, 'dist')
  },

  plugins: [
    new ExtractTextPlugin('cms.css', { allChunks: true })
  ],

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'ngtemplate',
        query: {
          module: 'cms.starwipe.templates',
          relativeTo: '/app'
        }
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(ico|gif|png)$/,
        loader: 'url',
        query: {
          limit: 10000
        }
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loader: 'file',
        query: {
          hash: 'sha512',
          digest: 'hex',
          name: '[name]-[hash].[ext]'
        }
      }
    ]
  }
};
