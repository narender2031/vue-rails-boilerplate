const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const exposeJQuery = require('./loaders/expose-jquery');
const customConfig = require('./custom');

environment.config.merge(customConfig);
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.append('expose', exposeJQuery);

module.exports = environment
