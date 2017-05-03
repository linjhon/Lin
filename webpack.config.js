var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:  path.resolve(__dirname, './src/index.js'),
	output: { // 出口文件
		path: path.resolve(__dirname, './build'),
		publicPath: '/build/',
		filename: 'bundle.js' //输出文件
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
		new webpack.HotModuleReplacementPlugin()		
	],
	devServer: {
		// host: '10.31.155.62',
		host: '127.0.0.1',
		port: 80,
		// proxy: [{
		// 	context: ['//linqiang.online'],
		// 	target: '//10.31.155.62',
		// 	changeOrigin: true,
		// 	secure: false
		// }]
	}
	// ,externals: {
	// 	jQuery: true,		
	// }
	,devtool: 'eval-source-map'
}

/*
1. 安装支撑模块 cnpm i --save-dev  style-loader  css-loader sass-loader  node-sass
2. 修改webpack.config.js的loaders部分，加入style!css!sass的加载器
3. 建立scss目录以及scss文件
4. 可以在入口文件中用require模块引入的方式进行scss文件的引入
*/