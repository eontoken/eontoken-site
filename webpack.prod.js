const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/index.js',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html',
        })
    ],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.[hash:8].js',
        publicPath: "/"
    },
    module: {
        loaders : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react','stage-1'] }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?minimize',
            }
        ]
    },
    devServer: {
        contentBase: './public',
        colors: true,
        historyApiFallback: true,
        inline: true
    },
};