const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // entry: {
    //     login: "./src/index.js",
    //     todo: "./src/components/todo-list.component.js"
    // },
    // output: {
    //     filename: "[name].bundle.js",
    //     path: path.resolve(__dirname, "dist")
    // },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({template: "index.html", filename: "./index.html"})
    ]
};