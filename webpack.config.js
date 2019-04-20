module.exports = {
    entry: {
        index: './src/index.js',
        auth: './src/auth.js',
    },
    output: {
        filename: "bundle.[name].js"
    },
}