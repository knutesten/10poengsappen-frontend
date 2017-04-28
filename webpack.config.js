var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// the entry point of our app
    entry: './app/index.js',
	// the output from webpack
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
	resolve: {
		alias: {
			create: path.resolve(__dirname, 'app/utils/createHtmlBuilder'),
			fetchBuilder: path.resolve(__dirname, 'app/utils/fetchBuilder')
		}
	},
    module: {
        rules: [
            {
                test: /`.js$/,
                exclude: /node_modules/,
                use: {
                	loader: 'babel-loader',
	                options: {
		                presets: ['env', 'stage-2']
	                }
                }
            }, {
		        test: /\.scss$/,
		        use: [{
			        loader: "style-loader" // creates style nodes from JS strings
		        }, {
			        loader: "css-loader",
			        options: {modules: true}// translates CSS into CommonJS
		        }, {
			        loader: "sass-loader" // compiles Sass to CSS
		        }]
	        }, {
	        	test: /\.vue$/,
		        loader: 'vue-loader'
	        }
        ]
    },
	plugins: [
		// creates index.html in dist folder
		new HtmlWebpackPlugin({
			template: 'index.html',
			title: '10 poeng!'
		})
	],
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:4567/',
				secure: false
			}
		}
	}
}
