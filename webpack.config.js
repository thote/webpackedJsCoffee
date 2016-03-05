webpack = require("webpack");
var path = require('path');

var coffeeDir = path.resolve(__dirname, './coffee');
var es6Dir = path.resolve(__dirname, './es6');
var jsDir = path.resolve(__dirname, './js');

module.exports = {
   // entry: "./coffeeMain.coffee",
  //entry: "./main.js",    
    entry: "./es6/es6main.js",                
   //  entry: "./js/main.js",
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
        include: [es6Dir],
        exclude: [jsDir],
        loader: 'babel-loader?presets[]=es2015'
      },
      { 
        test: /\.js$/,  
        include: [jsDir],
        exclude: [es6Dir],
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
      js: jsDir
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
