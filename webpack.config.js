var webpack = require('webpack');
var path = require('path');
module.exports = {
	devtool :'inline-source-map',
    entry: [
    'webpack-hot-middleware/client',
    './client/client.js'
    ],
    /*devServer: {
        inline: true,
        port: 3001
    },*/
    output: {
        path: path.join(__dirname, "dist"),
        //we can use require("path").resolve("./dist")
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] ,

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=react-hmre'
        }]
}
}