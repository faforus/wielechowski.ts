module.exports = {
  plugins: [
    require('postcss-color-mod-function'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
      },
    }),
    require('cssnano')({
      preset: 'default',
    }),
    require('postcss-simple-vars'),
    require('postcss-mixins'),
    require('postcss-apply'),
    require('postcss-import'),
    require('precss'),
  ],
};
