const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: process.env.ENV === 'production' ? false : 'inline-source-map',
    entry: './src/scripts/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'assets/scripts'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015',
                    ],
                    plugins: [
                        'transform-runtime',
                    ],
                },
            },
        ],
    },
    plugins: process.env.ENV === 'production' ? [new webpack.optimize.UglifyJsPlugin()] : []
};