const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: {
        index: './src/scripts/main.js',
        prices: './src/scripts/prices.js',
        contact: './src/scripts/contact.js',
        about: './src/scripts/about.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[hash:20].js',
        path: buildPath
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                        //plugins:['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(png|jpg|jpeg|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            inject: 'body',
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/prices.html',
            inject: 'body',
            chunks: ['prices'],
            filename: 'prices.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/contact.html',
            inject: 'body',
            chunks: ['contact'],
            filename: 'contact.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/about.html',
            inject: 'body',
            chunks: ['about'],
            filename: 'about.html'
        })
    ],
};