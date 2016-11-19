const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');


config.entry.unshift('webpack/hot/only-dev-server');
config.entry.unshift('webpack-dev-server/client?https://0.0.0.0:8080');

new WebpackDevServer(webpack(config), {

	publicPath: config.output.publicPath,
	contentBase: './public',
	historyApiFallback: true

}).listen(8080, function(err, result) {
	
	if (err) {
		console.log(err);
	}

	console.log("Dev server running on http://localhost:8080");
	
})