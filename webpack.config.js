var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
	 	'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
  		'webpack/hot/only-dev-server',
		'./src/app.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/scripts' // webpackdevserver will expose "dist" through src="scripts/bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: [ 'react-hot', 'babel-loader' ],
				include: path.join(__dirname, 'src')
			}
		]
	},
	plugins: [
	  new webpack.HotModuleReplacementPlugin(),
	  new webpack.NoErrorsPlugin()
	],
	devtool: 'sourcemap'
};
