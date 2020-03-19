const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/app.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'lib'),
  },
};
