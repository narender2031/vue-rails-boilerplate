import Vue from 'vue';

import { setupBootstrap} from '../setup/bootstrap';
import { setupI18n } from '../setup/i18n';
import { setupValidations } from '../setup/validation';

import Home from '../Home/Home';

window.vue_rails_boilerplate.initHome = el => {
  setupBootstrap();
  const i18n = setupI18n();
  setupValidations(i18n);

  new Vue({
    el,
    i18n,
    components: {
      Home
    }
  })
}