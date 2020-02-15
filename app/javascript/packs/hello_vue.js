import Vue from 'vue';
import App from '../app.vue';
import { setupBootstrap} from '../setup/bootstrap';
import { setupI18n } from '../setup/i18n';

window.vue_rails_boilerplate.initSayHello = el => {
  setupBootstrap();
  const i18n = setupI18n();

  new Vue({
    el,
    i18n,
    components: { App }
  })
}

