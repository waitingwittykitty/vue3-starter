'use strict'
const path = require('path')
const merge = require('webpack-merge')

const baseWebpackConfig = require('./base')
const cssWebpackConfig = require('./css')
const config = require('../project.config')

module.exports = merge(baseWebpackConfig, cssWebpackConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
})

exports.devServerOptions = {
  clientLogLevel: 'silent',
  historyApiFallback: {
    rewrites: [
      {
        from: /.*/,
        to: path.posix.join(config.dev.publicPath, 'index.html'),
      },
    ],
  },
  contentBase: './dist',
  hot: true,
  compress: false,
  publicPath: config.dev.publicPath,
  overlay: { warnings: false, errors: true },
  host: '0.0.0.0',
  port: config.dev.port,
  https: false,
  open: false,
}
