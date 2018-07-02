const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    debug: true,
    entry: __dirname + '/src/index.js',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev')
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html',
        })
    ],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
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
        inline: true,
        host: '0.0.0.0',
        port: 8080,
        disableHostCheck: true
    },
};