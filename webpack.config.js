const webpack = require('webpack-stream').webpack;

const dev = process.env.NODE_ENV !== 'production';

const options = {
    devtool: dev ? 'eval-source-map' : null,
    watch: dev,
    output: {
        publicPath: '/js/',
        filename: dev ? '[name].js' : '[chunkhash:12].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: [/node_modules/, /dist/],
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
}

module.exports = options;
