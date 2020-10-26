const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPrerenderPlugin = require('html-webpack-prerender-plugin');

module.exports = {
    entry: {
        contact: './src/scripts/contact.js',
        error: './src/scripts/error.js',
        index: './src/scripts/index.js',
        main: './src/scripts/main.js',
        prices: './src/scripts/investment.js',
        testimonials: './src/scripts/testimonials.js',

        contactTemplate: './src/scripts/templates/contact.js',
        errorTemplate: './src/scripts/templates/error.js',
        indexTemplate: './src/scripts/templates/index.js',
        pricesTemplate: './src/scripts/templates/investment.js',
        testimonialsTemplate: './src/scripts/templates/testimonials.js',

        headerTemplate: './src/scripts/templates/components/header.js',
        footerTemplate: './src/scripts/templates/components/footer.js'
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
            excludeChunks: ['pricesTemplate'],
            chunks: ['main', 'prices'],
            filename: 'prices.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/testimonials.html',
            inject: 'head',
            excludeChunks: ['testimonialsTemplate'],
            chunks: ['main', 'testimonials'],
            filename: 'testimonials.html'
        }),
        new HtmlWebpackPrerenderPlugin({
            'contact.html': {
                contactTemplate: '#slp-main',
                headerTemplate: '#slp-header',
                footerTemplate: '#slp-footer'
            },
            'error.html': {
                errorTemplate: '#slp-main'
            },
            'index.html': {
                indexTemplate: '#slp-main',
                headerTemplate: '#slp-header',
                footerTemplate: '#slp-footer'
            },
            'investment.html': {
                pricesTemplate: '#slp-main',
                headerTemplate: '#slp-header',
                footerTemplate: '#slp-footer'
            },
            'testimonials.html': {
                testimonialsTemplate: '#slp-main',
                headerTemplate: '#slp-header',
                footerTemplate: '#slp-footer'
            }
        }),
    ]
};