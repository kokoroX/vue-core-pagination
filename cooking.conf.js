var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    index: './src/index.js'
  },
  dist: './lib',
  template: false,

  // production
  clean: true,
  format: 'umd',
  moduleName: 'pagination',
  extends: ['vue', 'lint']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

module.exports = cooking.resolve();
