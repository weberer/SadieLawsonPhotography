const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPrerenderPlugin = require('html-webpack-prerender-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    // https://webpack.js.org/concepts/entry-points/#multi-page-application
    entry: {
        contact: './src/scripts/contact.js',
        error: './src/scripts/error.js',
        index: './src/scripts/index.js',
        main: './src/scripts/main.js',
        investment: './src/scripts/investment.js',
        testimonials: './src/scripts/testimonials.js',
        giftCards: './src/scripts/giftCards.js',

        contactTemplate: './src/scripts/templates/contact.js',
        errorTemplate: './src/scripts/templates/error.js',
        indexTemplate: './src/scripts/templates/index.js',
        investmentTemplate: './src/scripts/templates/investment.js',
        testimonialsTemplate: './src/scripts/templates/testimonials.js',

        headerTemplate: './src/scripts/templates/components/nav.js',
        footerTemplate: './src/scripts/templates/components/footer.js',
        messengerTemplate: './src/scripts/templates/components/facebook-messenger.js'
    },

    // how to write the compiled files to disk
    // https://webpack.js.org/concepts/output/
    output: {
        filename: '[name].[hash:20].js',
        path: buildPath,
        libraryTarget: 'umd'
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
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('sass'),
                        }
                    }
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
    // https://webpack.js.org/concepts/plugins/
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/html/contact.html',
            inject: 'head',
            excludeChunks: ['contactTemplate'],
            chunks: ['main', 'contact'],
            filename: 'contact.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/error.html',
            inject: 'head',
            excludeChunks: ['errorTemplate'],
            chunks: ['main', 'error'],
            filename: 'error.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            inject: 'head',
            excludeChunks: ['indexTemplate'],
            chunks:  ['main', 'index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/investment.html',
            inject: 'head',
            excludeChunks: ['investmentTemplate'],
            chunks: ['main', 'investment'],
            filename: 'investment.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/testimonials.html',
            inject: 'head',
            excludeChunks: ['testimonialsTemplate'],
            chunks: ['main', 'testimonials'],
            filename: 'testimonials.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/giftCard.html',
            inject: 'head',
            chunks: ['main', 'giftCards'],
            filename: 'giftCard.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/checkBalance.html',
            inject: 'head',
            chunks: ['main', 'giftCards'],
            filename: 'checkBalance.html'
        }),
        new HtmlWebpackPrerenderPlugin({
            'contact.html': {
                contactTemplate: '#slp-main',
                headerTemplate: '#slp-nav',
                footerTemplate: '#slp-footer',
                messengerTemplate: '#facebook-messenger'
            },
            'error.html': {
                errorTemplate: '#slp-main'
            },
            'index.html': {
                indexTemplate: '#slp-main',
                headerTemplate: '#slp-nav',
                footerTemplate: '#slp-footer',
                messengerTemplate: '#facebook-messenger'
            },
            'investment.html': {
                investmentTemplate: '#slp-main',
                headerTemplate: '#slp-nav',
                footerTemplate: '#slp-footer',
                messengerTemplate: '#facebook-messenger'
            },
            'testimonials.html': {
                testimonialsTemplate: '#slp-main',
                headerTemplate: '#slp-nav',
                footerTemplate: '#slp-footer',
                messengerTemplate: '#facebook-messenger'
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash:20].css",
            chunkFilename: "[id].[hash:20].css"
        }),
        new CopyPlugin({
            patterns: [
                'src/sitemap.xml',
                'src/robots.txt',
                {from: 'resources/photos', to: 'resources/photos'}
            ]
        })
    ],

    // https://webpack.js.org/configuration/optimization/
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    }
};

