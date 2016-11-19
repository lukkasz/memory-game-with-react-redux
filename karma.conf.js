var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  
  config.set({
    browsers: ['PhantomJS'],  // For C9 replace 'Chrome' with 'PhantomJS'
    hostname: process.env.IP || 'localhost', // Specific for C9
    port: process.env.PORT || 1338,   // Specific for C9
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
  
};