const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const buildPath = path.join(__dirname, 'dist/');

const commonConfig = {
    entry: {
        utils: './src/index',
    },
    output: {
        path: buildPath,
        filename: 'bay-utils.js',
        library: 'bayUtils',
        libraryTarget: 'var',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel'],
        }],
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
    ],
};

module.exports = commonConfig;
