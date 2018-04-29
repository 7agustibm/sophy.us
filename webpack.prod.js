 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
     optimization: {
         minimize: true,
         runtimeChunk: true,
         splitChunks: {
             chunks: "async",
             minSize: 1000,
             minChunks: 2,
             maxAsyncRequests: 5,
             maxInitialRequests: 3,
             name: true,
             cacheGroups: {
                 default: {
                     minChunks: 1,
                     priority: -20,
                     reuseExistingChunk: true,
                 },
                 vendors: {
                     test: /[\\/]node_modules[\\/]/,
                     priority: -10
                 }
             }
         }
     }
 });