module.exports = {
	entry: {
        app: './src/js'
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
    output: {
        path: __dirname + '/dist/bundles/',
        publicPath: '/js/',
        filename: '[name].bundle.js'
    },

    watch: true
}