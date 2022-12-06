module.exports = [
    {
        // Typescript loader
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|\.webpack)/,
        use: ['ts-loader'],
    },
    {
        // MJS Loader
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
        resolve: {
            fullySpecified: false,
        },
    },
    {
        // CSS Loader
        test: /\.css$/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'postcss-loader'},
        ],
    },
    {
        // Sass loader
        test: /\.scss/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'sass-loader'},
        ],
    },
    {
        // Less loader
        test: /\.less$/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'less-loader'},
        ],
    },
    {
        // Image Loader
        test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg)$/,
        use: [
            {
                loader: 'file-loader',
                // options: {
                //     publicPath: 'assets/images',
                //     outputPath: 'assets/images',
                // },
            },
        ],
    },
    {
        // Font & SVG loader
        test: /\.(woff(2)?|ttf|otf|eot)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    publicPath: 'assets/fonts',
                    outputPath: 'assets/fonts',
                },
            },
        ],
    },

]