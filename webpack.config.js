const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}