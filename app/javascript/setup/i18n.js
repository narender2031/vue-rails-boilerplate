import VueI18n from 'vue-i18n';
import { getLocale, messages } from '../translations/helper';
import Vue from 'vue';

export function setupI18n() {
  Vue.use(VueI18n);
  
  const locale = getLocale();

  const i18n = new VueI18n({
    locale,
    messages
  });

  return i18n;
}
