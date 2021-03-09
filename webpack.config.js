const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const environment =
	process.env.NODE_ENV === "production" ? "production" : "development";

const outputDir = {
	production: "docs",
	development: "dist",
};

const apiUrls = {
	production: "https://todo-backend-tutorial.herokuapp.com/",
	development: "http://127.0.0.1:8888",
};

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
		new webpack.DefinePlugin({
			API_URL: JSON.stringify(apiUrls[environment]),
		}),
	],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, outputDir[environment]),
	},
};
