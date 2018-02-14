const path = require('path')

const config = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'client'),
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'client'),
          path.resolve(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')
        ],
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ]
  }
}

module.exports = config
