const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: ['./src/main.tsx'],
	module: {
		rules: [
			{
				// Typescript loader
				test: /\.(ts|tsx)$/,
				exclude: /(node_modules|\.webpack)/,
				use: ['ts-loader'],
			},
			{
				// MJS Loader
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto',
				resolve: {
					fullySpecified: false,
				},
			},
			{
				// CSS Loader
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'postcss-loader'},
				],
			},
			{
				// Sass loader
				test: /\.scss/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'},
				],
			},
			{
				// Less loader
				test: /\.less$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'less-loader'},
				],
			},
			{
				// Image Loader
				test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg)$/,
				use: [
					{
						loader: 'file-loader',
						// options: {
						//     publicPath: 'assets/images',
						//     outputPath: 'assets/images',
						// },
					},
				],
			},
			{
				// Font & SVG loader
				test: /\.(woff(2)?|ttf|otf|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							publicPath: 'assets/fonts',
							outputPath: 'assets/fonts',
						},
					},
				],
			},
		],
	},
	output: {
		publicPath: '/', //Important: HMR will break on deep route navigation without publicPath
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			// favicon: 'public/favicon.ico',
			inject: true,
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[chunkhash].css',
			chunkFilename: '[name].[chunkhash].chunk.css',
		}),
		new ReactRefreshPlugin(),
	],
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	devtool: 'cheap-module-source-map',
	devServer: {
		open: true,
		hot: true,
		port: 8902,
		historyApiFallback: true,
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		runtimeChunk: true,
	},
	performance: {
		hints: false,
	},
}
