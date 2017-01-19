// Modules
const { resolve } = require('path')
const webpack = require('webpack')

const context = resolve(__dirname, 'src')

// Webpack config
module.exports = {
	context,
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./index.js'
	],
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'dist'),
		pathinfo: true,
	},
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		contentBase: resolve(__dirname, 'public'),
		filename: 'bundle.js',
		inline: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							plugins: [
								'transform-react-jsx',
								[
									'react-css-modules',
									{
										context,
										webpackHotModuleReloading: true,
									}
								]
							]
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	]
}