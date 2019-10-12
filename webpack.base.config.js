let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
let lessExtract = new ExtractTextWebpackPlugin('css/less.css')
let cssExtract = new ExtractTextWebpackPlugin('css/css.css')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: ['react-hot-loader/patch', __dirname + '/index.js'],
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    // 文件解析
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.less', '.css'],
        alias: {
            '@': resolve('src')
        }
    },
    // 模块配置
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                },
                enforce: 'pre',
                exclude: /node_modules/,
                include: [__dirname + '/src'],
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'images/[name]-[hash:8].[ext]',
                    }
                }]
            },
            {
                test: /\.css$/,
                use: cssExtract.extract({
                    use: [{
                        loader: 'css-loader'
                    }]
                })
            }
        ]
    },
    plugins: [
        lessExtract,
        cssExtract,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            title: '',
            // hash: true,
            inject: true,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        })
    ],
}
