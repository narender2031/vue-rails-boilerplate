const path = require('path');

module.exports = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      'styles': path.resolve(__dirname, '..', '..', 'app', 'assets', 'stylesheets'),
      'pulse': path.resolve(__dirname, '..', '..', 'app', 'javascript', 'pulse'),
    }
  }
}