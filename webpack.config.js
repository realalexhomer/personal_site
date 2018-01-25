module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'postcss-loader' ]
      }
    ]
  },
  entry: './themes/the_alex/source_src/index.js',
  output: {
    filename: './themes/the_alex/source/bundle.js'
  }
};
