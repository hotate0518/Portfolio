const path = require('path');

module.exports = {
  publicPath: '',
  configureWebpack: {
    module: {
      rules: [{
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
        include: path.resolve(__dirname, '../'),
      }],
    },
  },
};
