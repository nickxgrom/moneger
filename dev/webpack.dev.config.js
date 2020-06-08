const path = require('path'),
    VueLoaderPlugin = require('vue-loader/lib/plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: ["./src/index.js", 'webpack-hot-middleware/client'],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/"
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    plugins: [
        new VueLoaderPlugin,
        new HtmlWebpackPlugin({
            template: './src/index.template.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
}