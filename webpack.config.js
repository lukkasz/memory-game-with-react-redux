const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    './app/index.jsx'
  ],
  externals: {
    jquery: 'jQuery',
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
    
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  output: {
    path: path.resolve(__dirname, "public/assets/js/"),
    publicPath: '/assets/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot','babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-1'],
      include: path.join(__dirname, 'app'),
      exclude: /node_modules/
    },
    { 
      test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
      loader: 'url-loader?limit=100000' 
      
    }]
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      app: 'app',
      applicationStyles: 'app/style/style.scss',
    },
    extensions: ['', '.js', '.jsx']
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'eval-source-map'
};
