const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    index: path.join(__dirname, 'app/index.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.pug$/, loader: 'pug-loader' },
      { test: /\.(html)$/, loader: 'html-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app/view/index.pug'),
      filename: 'index.html',
      inject: 'body',
      chunks: ['index']
    }),
  ]
};
