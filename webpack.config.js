var webpack = require("webpack");
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var coffeeDir = path.resolve(__dirname, './coffee');
var es6Dir = path.resolve(__dirname, './es6');
var jsDir = path.resolve(__dirname, './js');
var libsDir = path.resolve(__dirname, './libs');
var htmlDir = path.resolve(__dirname, './html');
var cssDir = path.resolve(__dirname, './styles');

module.exports = {
    entry: "./es6/es6main.js", 
  output: {
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      { 
        test: /\.html$/,  
        exclude: /node_modules/,  
        loader: 'html'
      },
      { 
        test: /\.css$/,  
        exclude: /node_modules/,
        loader: 'style!css'
      },
      { 
        test: /\.scss$/,  
        exclude: /node_modules/,
        loader: 'style!css!scss'
      },
      { 
        test: /\.coffee$/,  
        include: [coffeeDir],  
        loader: 'coffee'
      },
      { 
        test: /\.js$/,  
        include: [es6Dir, libsDir],
        exclude: [jsDir],
        loader: 'babel-loader?presets[]=es2015,presets[]=react'
      },
      { 
        test: /\.js$/,  
        include: [jsDir],
        exclude: [es6Dir, libsDir],
        loader: 'script-loader'
      }
    ]
  }, 
   plugins: [
    new HtmlWebpackPlugin({
      title: 'This is webpackedJsCoffee',
      template: 'html/template.ejs',
      inject: 'body'
    })
  ], 
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
   
  resolve: {
    root: [__dirname],

    alias: {
      coffee: coffeeDir,
      es6: es6Dir,
      js: jsDir,
      libs: libsDir,
      html: htmlDir,
      css: cssDir
    },
 
    extensions: ['', '.js', '.coffee'],
  },

  devServer: {
    hot: true,
    port: 3000
  },
  debug: true,
  devtool: 'source-map'
};
