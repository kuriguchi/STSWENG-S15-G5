module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg|ttf)$/i,
            loader: 'file-loader',
            options: {
                outputPath: 'static/assets',
                publicPath: '/assets/',
            },
        });

        return config;
    },
};
  