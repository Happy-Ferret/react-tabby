const { resolve } = require('path')
const webpackMerge = require('webpack-merge')

const webpackBaseConfig = require('./base')

module.exports = function(env) {
	return webpackMerge(webpackBaseConfig(), {
		externals: {
			"react": {
				commonjs: "react"
			}
		}
	})
}

module.exports = function (env) {
  return {
    output: {
        path: respolve(__dirname, 'dist'),
        filename: 'Tabs.js',
        publicPath: publicPath,
        sourceMapFilename: '[name].map'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new UglifyJsPlugin({
            beautify: false,
            mangle: {
              screw_ie8: true,
              keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
  }
}