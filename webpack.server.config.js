const path = require('path');

module.exports = {
	target: "node",
	entry: './server.js',
	output: {
		path: path.join(__dirname, 'server-build'),
		filename: 'server_build.js'
	},
	module: {
	rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	devtool: 'source-map',
	mode: 'development'
}