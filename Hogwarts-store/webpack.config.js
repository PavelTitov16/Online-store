const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintPlugin = require('eslint-webpack-plugin'); 
const isProduction = process.env.NODE_ENV == 'production';
const CopyWebpackPlugin =  require('copy-webpack-plugin');
const stylesHandler = MiniCssExtractPlugin.loader;



const config = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: 'images/[name][ext]',
        publicPath: '',
        clean: true,
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin(),
        new EslintPlugin({ extensions: 'ts' }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/audio'), 
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/i, 
                use: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './assets/fonts/[name][ext]'
                },
            },
            {
                test: /\.mp3$/i,
                type: 'asset/resource',
                generator: {
                    filename: './assets/audio/[name][ext]'
                },
            },
            {
                test: /\.(ico|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './assets/icons/[name][ext]'
                },
            },
            {
                test: /\.(?:gif|png|jpg|jpeg|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './assets/images/[name][ext]'
                }
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};