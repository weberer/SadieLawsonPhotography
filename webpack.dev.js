const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPrerenderPlugin = require('html-webpack-prerender-plugin');

module.exports = {
    entry: {
        main: './src/scripts/main.js',
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
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[hash:20].js',
        path: buildPath,
        libraryTarget: 'umd',
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
            excludeChunks: ['indexTemplate'],
            chunks:  ['main'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/prices.html',
            inject: 'body',
            excludeChunks: ['pricesTemplate'],
            chunks: ['main', 'prices'],
            filename: 'prices.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/contact.html',
            inject: 'body',
            excludeChunks: ['contactTemplate'],
            chunks: ['main', 'contact'],
            filename: 'contact.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/about.html',
            inject: 'body',
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
    ]
};