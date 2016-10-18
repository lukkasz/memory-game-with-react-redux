const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery',

  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: path.resolve(__dirname, "public/assets/"),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      },
      test: /\.jsx?$/,
      exclude: /node_modules/
    },
    { 
      test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
      loader: 'url-loader?limit=100000' 
      
    }]
  },
  resolve: {
    root: path.resolve(__dirname),
    modulesDirectories:[
      'node_modules', 
      './app/components'
    ],

    alias: {
      app: 'app',
      applicationStyles: 'app/style/style.scss',
    },
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  }
};
