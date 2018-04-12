var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    /* entry file */
    entry: {
        page1: ['', hotMiddlewareScript],
        page2: ['', hotMiddlewareScript],
        main:'./src/js/main.js'
    },
    /* Complied files and paths */
    output:{
        filename:'javascripts/[name]-bundle.js',
        /* using path name splicing */
        path:path.resolve(''),
        publicPath:publicPath
    },
    devtool:'source-map',
    module:{
        loaders:[
            {
                test:/\.(png|jpg)$/,
                loader:'url?limit=8192&context=client&name=[path][name].[ext]'
            },{

            }
        ]
    },
    plugins:[
    ]
};

