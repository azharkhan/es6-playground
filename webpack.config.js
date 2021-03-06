const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
    },
    devServer: {
            inline: true,
            port: 3333
    },
    devtool: 'eval-source-map',
    eslint: {
        emitWarning: true
    },
    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                include: path.join(__dirname, 'src')
            }
        ]
    }
};
