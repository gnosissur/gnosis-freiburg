let webpack = require('webpack');

module.exports = env => ({
    entry: "./index.js",
    output: {
        filename: './build/bundle.js',
        publicPath: '/',
        path: __dirname,
    },
    module: {
        loaders: [
            { test: /.jsx?$/, exclude: /node_modules/, loaders: ['babel'] }
        ]
    },
    resolve: {
        alias: env.prod && {
            'react': 'react-lite',
            'react-dom': 'react-lite',
        }
    },
    plugins: env.prod && [
        new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
        new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, mangle: true }),
    ]
});
