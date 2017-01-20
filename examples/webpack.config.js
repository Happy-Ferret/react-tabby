// Modules
const { resolve } = require('path')
const webpack = require('webpack')
const fs = require('fs')

const context = resolve(__dirname)

// Webpack config
module.exports = {
	context,

	node: {
		__dirname: true,
	},
	
	entry: fs.readdirSync(__dirname).reduce(function( entries, dir) {
		if( fs.statSync(resolve(__dirname, dir)).isDirectory() ){
			entries[dir] = resolve(__dirname, dir, 'app.js')
		}

		return entries
	}, {}),
	
	output: {
		path: resolve(__dirname, '__build__'),
		filename: '[name].js',
		chunkFilename: '[id].chunk.js',
		publicPath: '/__build__/',
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
					}
				],
				exclude: /node_modules/
			}
		]
	},

	resolve: {
		alias: {
			'react-tabby': resolve(__dirname, '..', 'modules')
		}
	},

	plugins: [
		// new webpack.optimize.CommonsChunkPlugin('shared.js'),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		})
	]
}