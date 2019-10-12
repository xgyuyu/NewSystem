let path = require('path')
let config = require('./webpack.base.config')
let FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = Object.assign({}, config, {
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 3003,
        host:'0.0.0.0',
        overlay: true,
        compress: true,
        open: true,
        hot: true,
        inline: true,
        quiet: true,
        proxy: {
            "/api": {
                target: 'http://localhost:8000',
                secure: false
            }
        }
    },
    plugins: [
        new FriendlyErrorsPlugin(),
        ...config.plugins
    ],
    mode: 'development'
})
