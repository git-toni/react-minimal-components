    //publicPath: '/dist',
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname+'/dist',
    library:'react-minimal-components',
    libraryTarget:'umd',
    filename: 'react-minimal-components.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
