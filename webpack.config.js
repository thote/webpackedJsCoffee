webpack = require("webpack");
module.exports = {
   // entry: "./coffeeMain.coffee",
  entry: "./coffeeMain1.js",
  // entry: "./main.js",
  output: {
    filename: "./bundle.js"
  },
  module: {
    loaders: [
      { test: /\.coffee$/,  exclude: /node_modules/,  loader: 'coffee-loader'}
    ]
  },  

  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
   
  resolve: {
    // Directories that contain our modules
    root: [__dirname],
 
    // Extensions used to resolve modules
    extensions: ['', '.js', '.coffee'],
  },

  devServer: {
    hot: true,
    port: 3000
  }
};
