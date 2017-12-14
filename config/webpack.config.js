const path = require('path');
process.traceDeprecation = true
module.exports = {
  entry: path.join(__dirname, '../main', 'index'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../lib'),
    library: 'coral',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
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