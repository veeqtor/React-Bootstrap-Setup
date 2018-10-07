const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: './index.html',
  title: 'Production',
});
const cleanWebpackPlugin = new CleanWebpackPlugin(['dist']);

module.exports = {
  entry: {
    app: './src/index.js',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?cacheDirectory=true',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: ['file-loader?name=[name].[ext]', 'url-loader?limit=10000&mimetype=application/font-woff'],
      },
      {
        test: /\.(jpe?g|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        use: ['url-loader?limit=5000000', 'img-loader'],
      },
    ],
  },
  // Specifies which extension webpack will resolve
  resolve: { extensions: ['*', '.js', '.jsx'] },

  // setup output for the bundled js
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },

  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin,
  ],
};
