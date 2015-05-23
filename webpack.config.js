var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var classNamesPattern = process.env.NODE_ENV === 'development' ?
    '[hash:base64:20]' :
    '[hash:base64:4]';

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
				loaders: [ 'react-hot', 'babel-loader?stage=0' ],
				include: path.join(__dirname, 'src')
			},
			{ // we can do: import './Component.css';
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=' + classNamesPattern)
			},
			{ // we can do: import './Component.less';
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=' + classNamesPattern + '&!less-loader')
				// !autoprefixer-loader?browsers=last 50 version!
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('[name].css')
	],
	devtool: 'sourcemap'
};
