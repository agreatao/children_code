const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: '#eval-source-map',
    entry: {
        main: path.join(__dirname, 'src/entry/main')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.join(__dirname, 'src')
        }
    },
    plugins: [
        new CleanWebpackPlugin([ 'dist' ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/entry/template.html'),
            chunks: [ 'main' ],
            favicon: path.join(__dirname, 'favicon.ico'),
            inject: true
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
