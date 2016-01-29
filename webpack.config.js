var webpack = require('webpack');  
module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
      loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel", query: {presets:['react','es2015']}},
            { test: /\.css$/, loader: "style!css" }
      ]
    },
 /*   module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/, query: { presets:['es2015','react'] }},
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        ]
    },*/
    plugins: [
      new webpack.NoErrorsPlugin()
    ],
    devServer: {
          historyApiFallback: true
    }


};