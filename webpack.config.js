const path = require('path');

const DIST_PATH = path.resolve(__dirname, 'dist');
const SOURCE_PATH = path.resolve(__dirname, 'src');

module.exports = {
  entry: `${SOURCE_PATH}/`,
  output: {
    path: DIST_PATH,
    filename: 'app.dist.js',
    publicPath: '/app/',
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          'es2015',
          'react',
          'stage-0',
        ],
      },
    },
    {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        {
          loader: 'postcss-loader',
        },
      ],
    },
    ],
  },
};
