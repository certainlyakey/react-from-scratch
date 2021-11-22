const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        static: path.join(__dirname, 'public/'),
        port: 3000,
        hot: true,
        devMiddleware: {
            publicPath: 'http://localhost:3000/dist/',
        }
    },
    plugins: [],
    devtool: 'eval-source-map',
};
