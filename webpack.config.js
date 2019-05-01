module.exports = {
    entry: {
        index: './src/index.js',
        auth: './src/auth.js',
    },
    output: {
        filename: "bundle.[name].js"
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    }
}