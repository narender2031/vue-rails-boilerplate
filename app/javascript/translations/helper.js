import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocales from '../translations/en'

Vue.use(VueI18n)

export const getLocale = () => {
  return document.getElementsByTagName('HTML')[0].getAttribute('lang');
};

export const createCustomDict = (attribute, locale) => {
  let customDict = {};
  let dictionary = {};

  customDict[attribute] = {
    regex: (field) => field + ' ' + locale + '.'
  };

  dictionary[getLocale()] = { custom: customDict };
  return dictionary;
}

export const messages = { ...enLocales };

export const defaultI18n = () => {
  return new VueI18n({
    locale: getLocale(),
    fallbackLocale: 'en',
    messages
  });
};
