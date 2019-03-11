module.exports = {
    entry: ["./src/index.js"],

    output: {
        path: '/',
        filename: 'app/bundle.js'
    },

    module: {
        rules: [
        {
            test: /\.jsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            },
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
            {
                loader: 'file-loader',
                options: {},
            }
            ]
        }
        ]
    }
}