const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/app.js",
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
		new CopyPlugin({
			patterns: [{ from: "assets", to: "assets" }],
		}),
	],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
};
