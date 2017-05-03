var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {	
	entry: {
        'bundle': path.resolve(__dirname,'./src/index.js'),
       	'lib': ['react', 'react-dom','react-router']
    },
    output: {
        path: path.resolve(__dirname,'prd'),
        publicPath: '/prd/',
        filename: "[name].[chunkhash].js",
		chunkFilename: "[chunkhash].js"
    },
	module: { // 操作模块
		loaders: [ //加载器
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react'
			},
			{
				test: /\.scss$/,
				loader: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=8000&name=./images/[name].[hash:8].[ext]'
				//将小于12k的图片转换到base64引入;大于的使用file-loader迁入到./build/images/目录下;
			},
			{
				// 匹配字体文件;打包到build文件下
				test: /\.(woff|woff2|svg|eot|ttf)$/, //
				loader: 'file-loader?name=./fonts/[name].[ext]'
			},
			{
				//打包到build文件下
				test: /\.php$/, //
				loader: 'file-loader?name=./php/[name].[ext]'
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
            names: ['lib', 'manifest']
        }),
		new HtmlWebpackPlugin({
			template:'index.ejs',
			filename:'index.html',
		})
		,
		new CopyWebpackPlugin([{
			from: __dirname + '/src/public',
			ignore:[
				'*.png','*.jpg','*.gif','images'
			]
		}])
	]
	// ,
	// devServer: {
	// 	// host: '10.31.155.62',
	// 	host: '127.0.0.1',
	// 	port: 80,
	// 	// proxy: [{
	// 	// 	context: ['//linqiang.online'],
	// 	// 	target: '//10.31.155.62',
	// 	// 	changeOrigin: true,
	// 	// 	secure: false
	// 	// }]
	// }
}
