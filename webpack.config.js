var webpack = require('webpack');
var path = require('path');

// Path of bundle file output
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');

// Path of React.js codebase
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  },
  
  entry: APP_DIR + '/index.jsx',

  // Instructions for Webpack to output bundle.js after bundling process
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;