var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: './example/main.js'
  },
  dist: './dist',
  template: './example/index.tpl',

  devServer: {
    port: 8082,
    publicPath: '/'
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  chunk: [
    {
      name: 'vendor',
      minChunks: function(module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, 'node_modules')
          ) === 0
        );
      }
    },
    {
      // extract webpack runtime and module manifest to its own file in order to
      // prevent vendor hash from being updated whenever app bundle is updated
      name: 'manifest',
      chunks: ['vendor']
    }
  ],
  publicPath: '/dist/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  extends: ['vue', 'lint']
});

cooking.add('loader.less', {
  test: /\.less$/,
  loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
});

cooking.add('loader.css', {
  test: /\.css$/,
  loaders: ['style-loader', 'css-loader', 'autoprefixer-loader']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

module.exports = cooking.resolve();
