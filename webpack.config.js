const path = require('path');

const PATH_SOURCE = path.join(__dirname, 'src');
const PATH_DIST = path.join(__dirname, 'dist');

module.exports = {
  entry: path.join(PATH_SOURCE, 'index.js'),
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
