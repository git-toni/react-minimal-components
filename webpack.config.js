module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname+'/lib',
    filename: 'index.js',
    library:'react-minimal-components',
    libraryTarget:'umd'
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
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: '_',
      root: '_'
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    }
  }
};
