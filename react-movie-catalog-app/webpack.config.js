const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config({ path: path.join(__dirname, `.env.${process.env.NODE_ENV}`) });

const { PORT: port, NODE_ENV: mode } = process.env;

const devServer = {
  port,
  open: true
};

module.exports = {
  mode,
  devServer,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/templates/index.html'
    }),
    new MiniCssExtractPlugin()
  ]
};
