const path = require('path');

const PATH_SOURCE = path.join(__dirname, 'src');
const PATH_DIST = path.join(__dirname, 'dist');

module.exports = {
  entry: path.join(PATH_SOURCE, 'index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
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
};
