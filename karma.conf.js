var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['tests.webpack.js'],
    preprocessors: {
      'tests.webpack.js': [
        'webpack', 'sourcemap'
      ]
    },
    browserNoActivityTimeout: 100000,
    reporters: ['mocha'],
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel'
          },
          {
            test: /\.styl$/,
            loader: 'style!css!stylus'
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
