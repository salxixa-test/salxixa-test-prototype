let path = require('path');
let webpack = require('webpack');
let WebpackErrorNotificationPlugin = require('webpack-error-notification');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=false',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackErrorNotificationPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loaders: ['babel']
            },
            {
                test: /(\.scss|\.css)$/,
                loaders: ['style-loader', 'css-loader?modules', 'sass-loader'],
                include: /(flexboxgrid|src)/
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url?prefix=font/&limit=5000"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    }
};

export default config;
