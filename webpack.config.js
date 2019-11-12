const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATH_SOURCE = path.join(__dirname, 'src');
const PATH_DIST = path.join(__dirname, 'dist');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(PATH_SOURCE, 'index.html'),
  filename: 'index.html',
  inject: false,
});

const cleanWebpackPlugin = new CleanWebpackPlugin();

module.exports = {
  entry: path.join(PATH_SOURCE, 'index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: { 'react-dom': '@hot-loader/react-dom' },
  },
  output: {
    path: PATH_DIST,
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: PATH_DIST,
    historyApiFallback: true,
  },
  plugins: [htmlPlugin, cleanWebpackPlugin],
};
