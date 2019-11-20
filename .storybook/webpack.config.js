const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              options: {
                includePaths: [path.resolve('../node_modules')],
              },
            },
          },
        ],
      },
      {
        test: /\.story.js?$/,
        loaders: [require.resolve('@storybook/source-loader')],
        enforce: 'pre',
      },
    ],
  },
};
