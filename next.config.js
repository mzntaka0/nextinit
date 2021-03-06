// next.config.js
//const withTypescript = require('@zeit/next-typescript')
//module.exports = withTypescript()

//const withTypescript = require('@zeit/next-typescript')
//module.exports = withTypescript({
//  webpack(config, options) {
//    return config
//  }
//})
require("dotenv").config();


const path = require("path");
const Dotenv = require("dotenv-webpack");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  poweredByHeader: false,
};

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    return config;
  }
};
