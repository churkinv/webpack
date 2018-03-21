module.exports = {
    entry: ["./utils.js", "./app.js"],
    output: {
        filename: "bundle.js"
    },
    watch: true,
    module: {
        preloaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extentions: ["", ".js", ".es6"]
    }
}