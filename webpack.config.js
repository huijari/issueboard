const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets: [
            [
              'env',
              {
                targets: {
                  browsers: 'last 2 chrome versions'
                }
              }
            ],
            'preact'
          ]
        }
      }
    ]
  },

  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  }
}
