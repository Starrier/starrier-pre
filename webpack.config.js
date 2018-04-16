const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
/*
html-webpack-plugin插件，重中之重，webpack中生成HTML的插件，
具体可以去这里查看https://www.npmjs.com/package/html-webpack-plugin
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    entry: { //配置入口文件，有几个写几个
        main: './src/js/main.js'
    },
    output: {
        path: path.join(__dirname, './dist/'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath: 'http://localhost:3000',               //模板、样式、脚本、图片等资源对应的server上的路径
        filename: 'js/[name]-bundle.js',           //每个页面对应的主js的生成配置
        chunkFilename: 'js/[id].chunk.js'   //chunk生成的配置
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude:path.resolve(__dirname,'node_modules'),
            },
            {
                //配置css的抽取器、加载器。'-loader'可以省去
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    use:['style-loader', 'css-loader?minimize']
                })

            },
            {
                //配置less的抽取器、加载器。中间!有必要解释一下，
                //根据从右到左的顺序依次调用less、css加载器，前一个的输出是后一个的输入
                //你也可以开发自己的loader哟。有关loader的写法可自行谷歌之。
                test: /\.less$/,
                use:['css!less']
            },
            {
                //配置scss的抽取器、加载器。中间!有必要解释一下，
                //根据从右到左的顺序依次调用scss、css加载器，前一个的输出是后一个的输入
                //你也可以开发自己的loader哟。有关loader的写法可自行谷歌之。
                test: /\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
        //html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
        //比如你配置，attrs=img:src img:data-src就可以一并处理data-src引用的资源了，就像下面这样
                test: /\.html$/,
                 loader: "html?attrs=img:src img:data-src"
            },
            {
        //文件加载器，处理文件静态资源
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            },
            {
        //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
        //如下配置，将小于8192byte的图片转成base64码
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
            }
            ]
    },
    plugins: [
        new webpack.ProvidePlugin({ //加载jq
            $: 'jquery'
        })
  ]
};