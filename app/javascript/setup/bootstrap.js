import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

export function setupBootstrap() {
  Vue.use(BootstrapVue, {
    breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
  });
}
