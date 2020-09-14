const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('MiniCssExtractPlugin') // 分离css webpack4不支持extract-text-webpack-plugin
var devFlagPlugin = new webpack.DefinePlugin({
	env_dev: JSON.stringify('env_dev'),
	env_pro: JSON.stringify('env_pro'),
})
if (process.env.type == 'build') {
	var website = {
		publicPath: 'http://192.168.0.104:1717/',
	}
} else {
	var website = {
		publicPath: 'http://cdn.jspang.com/',
	}
}
console.log(website)
// console.log(__dirname)//项目路径
module.exports = {
	// devtool: 'eval-source-map', // 调试打包代码
	entry: {
		bundle1: './src/index.js',
		bundle2: './src/content.js',
	},

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		// publicPath:"http://192.168.10.157:1717/"
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		{ loader: 'style-loader' },
			// 		{ loader: MiniCssExtractPlugin.loader },
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				modules: {
			// 					localIdentName: '[local]-[hash:base64:5]',
			// 				},
			// 			},
			// 		},
			// 	],
			// },
			{
				test: /\.(htm|html)$/i,
				use: ['html-withimg-loader'],
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[local]-[hash:base64:5]',
							},
						},
					},
				],
			},
			{
				test: /\.(png|jpg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]',
							limit: 8192,
							outputPath: 'imgs/',
							esModule: false,
						},
					},
				],
			},
			{
				test: /\.(htm|html)$/i,
				use: ['html-withimg-loader'],
			},
		],
	},

	plugins: [
		new UglifyJSPlugin(),
		new HtmlWebpackPlugin({
			title: 'samzhaooo',
			template: './src/index.html',
		}),
		devFlagPlugin,
		// new MiniCssExtractPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			_: 'lodash',
		}),
	],
	devServer: {
		//设置基本目录结构
		contentBase: path.resolve(__dirname, 'dist'),
		//服务器的IP地址，可以使用IP也可以使用localhost
		host: '192.168.10.157',
		//服务端压缩是否开启
		compress: true,
		//配置服务端口号
		port: 1717,
	},
	// UglifyJSPlugin这款插件用于压缩JS代码，减少资源体积大小
}
