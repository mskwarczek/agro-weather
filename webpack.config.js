var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = [
    {
        name: 'client',
        target: 'web',
        mode: 'development',
        entry: {
            client: [
                '@babel/polyfill',
                './client.js'
            ]
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'client.js'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ]
                        }
                    }
                }
            ]
        },
        optimization: {
            splitChunks: {
                name: 'vendor',
                chunks: 'all'
            }
        },
        devtool: 'cheap-module-source-map',
        node: {
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
        }
    },
    {
        name: 'server',
        target: 'node',
        mode: 'development',
        externals: [nodeExternals()],
        entry: {
            server: [
                '@babel/polyfill',
                './server.js'
            ]
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'server.js'
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ]
                        }
                    }
                }
            ]
        },
        devtool: 'cheap-module-source-map',
        node: {
            console: false,
            global: false,
            process: false,
            Buffer: false,
            __filename: false,
            __dirname: false,
        }
    }
]
