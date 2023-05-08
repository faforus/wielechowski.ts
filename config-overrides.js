const { override, addPostcssPlugins } = require('customize-cra');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = override(
  addPostcssPlugins([
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
  ]),
  (config) => {
    const loaders = config.module.rules.find((rule) => Array.isArray(rule.oneOf)).oneOf;
    loaders.unshift({
      test: /\.module\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
        },
        require.resolve('postcss-loader'),
      ],
    });
    return config;
  },
  (config) => {
    config.plugins.push(new MiniCssExtractPlugin());
    config.optimization.minimizer.push(new CssMinimizerPlugin());
    return config;
  },
);
