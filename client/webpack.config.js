const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, "./src/index.js"),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, "src"),
				exclude: /node_modules/,
				use:
				{
					loader: "babel-loader",
					options: {
						presets: [
							['@babel/preset-env', {
								"targets": "defaults"
							}],
							'@babel/preset-react'
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							url: false
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|svg|gif)$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/images/',
						},
					}
				],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
		publicPath: "/",
	},
	plugins: [new webpack.HotModuleReplacementPlugin(),
	new HtmlWebpackPlugin({
		template: 'public/index.html',
		favicon: 'public/favicon.ico'
	}),
	new MiniCssExtractPlugin({
		filename: "[name].css"
	}),
	new webpack.ProvidePlugin({

	})
	],
	devServer: {
		static: path.resolve(__dirname, "./public"),
		historyApiFallback: true,
	},
};