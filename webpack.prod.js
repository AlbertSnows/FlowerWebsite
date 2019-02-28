const path = require('path');
// plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// externals
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: [
        './src/entrance.ts'
    ],
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                configFile: 'tsconfig.json'
            })
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    context: __dirname,
                    configFile: 'tsconfig.json'
                }
            }],
            exclude: [
                /node_modules/,
                /\*\*\/*.spec.ts/
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin([
            'dist'
        ], {
            root: __dirname,
            beforeEmit: true,
            exclude: [
                /node_modules/
            ]
        }),
        new CopyWebpackPlugin([
            { 
                from: './src/css',
                to: './css'
            },
            {
                from: './src/data',
                to: './data'
            },
            {
                from: './src/public',
                to: './public'
            },
            {
                from: './src/js',
                to: './js'
            }
        ])
    ],
    externals: [
        nodeExternals()
    ],
    devtool: 'inline-source-map',
}