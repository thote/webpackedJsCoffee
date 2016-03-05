webpack = require("webpack");
var path = require('path');

var coffeeDir = path.resolve(__dirname, './coffee');
var es6Dir = path.resolve(__dirname, './es6');
var jsDir = path.resolve(__dirname, './js');
var libsDir = path.resolve(__dirname, './libs');

module.exports = {
    entry: "./es6/es6main.js", 
  output: {
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
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

  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
   
  resolve: {
    // Directories that contain our modules
    root: [__dirname],

    alias: {
      coffee: coffeeDir,
      es6: es6Dir,
      js: jsDir,
      libs: libsDir
    },
 
    // Extensions used to resolve modules
    extensions: ['', '.js', '.coffee'],
  },

  devServer: {
    hot: true,
    port: 3000
  },
  debug: true,
  devtool: 'source-map'
};
