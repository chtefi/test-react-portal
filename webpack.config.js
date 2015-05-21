var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
			},
			{ // we can do: import './Component.css';
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!!autoprefixer-loader?browsers=last 50 version')
			},
			{ // we can do: import './Component.less';
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!!autoprefixer-loader?browsers=last 50 version!less-loader?sourceMap!')
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin("[name].css")
	],
	devtool: 'sourcemap'
};
