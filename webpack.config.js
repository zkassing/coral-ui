const path = require('path');
module.exports = {
  entry: path.join(__dirname, 'main', 'index'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015'
            ]
          }
        },
        exclude: /node_modules/
      },{
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },{
            loader: 'css-loader'
          }
        ]
      },{
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.css', '.vue']
  },
  devtool: 'source-map'
};