const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPrerenderPlugin = require('html-webpack-prerender-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {

    // This option controls if and how source maps are generated.
    // https://webpack.js.org/configuration/devtool/
    devtool: 'source-map',

    // https://webpack.js.org/concepts/entry-points/#multi-page-application
    entry: {
        main: './src/scripts/main.js',
        index: './src/scripts/index.js',
        prices: './src/scripts/prices.js',
        contact: './src/scripts/contact.js',
        about: './src/scripts/about.js',
        indexTemplate: './src/scripts/templates/index.js',
        pricesTemplate: './src/scripts/templates/prices.js',
        contactTemplate: './src/scripts/templates/contact.js',
        aboutTemplate: './src/scripts/templates/about.js',
        headerTemplate: './src/scripts/templates/components/header.js',
        footerTemplate: './src/scripts/templates/components/footer.js',
    },

    // how to write the compiled files to disk
    // https://webpack.js.org/concepts/output/
    output: {
        filename: '[name].[hash:20].js',
        path: buildPath
    },

    // https://webpack.js.org/concepts/loaders/
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    //MiniCssExtractPlugin.loader,
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
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
    // https://webpack.js.org/concepts/plugins/
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            inject: 'head',
            excludeChunks: ['indexTemplate'],
            chunks:  ['main', 'index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/prices.html',
            inject: 'head',
            excludeChunks: ['pricesTemplate'],
            chunks: ['main', 'prices'],
            filename: 'prices.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/contact.html',
            inject: 'head',
            excludeChunks: ['contactTemplate'],
            chunks: ['main', 'contact'],
            filename: 'contact.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/about.html',
            inject: 'head',
            excludeChunks: ['aboutTemplate'],
            chunks: ['main', 'about'],
            filename: 'about.html'
        }),
        new HtmlWebpackPrerenderPlugin({
            'index.html': {
                indexTemplate: '#slp-main',
                headerTemplate: '#slp-header',
                footerTemplate: '#slp-footer'
            },
            'prices.html': {
                pricesTemplate: '#slp-main',
                headerTemplate: '#slp-header',
                footerTemplate: '#slp-footer'
            },
            'contact.html': {
                contactTemplate: '#slp-main',
                headerTemplate: '#slp-header',
                footerTemplate: '#slp-footer'
            },
            'about.html': {
                aboutTemplate: '#slp-main',
                headerTemplate: '#slp-header',
                footerTemplate: '#slp-footer'
            },
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        })
    ],

    // https://webpack.js.org/configuration/optimization/
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    }
};

