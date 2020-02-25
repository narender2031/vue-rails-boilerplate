import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';

import * as Rules from '../validation/Rules'
export function setupValidations(i18n) {
  Vue.use(VeeValidate)
  setupRules();
  setupI18n({ i18n });
}

function setupRules() {
  Object.keys(Rules).forEach(rule => {
    Validator.extend(
      rule,
      Rules[rule].validate,
      Object.assign({}, Rules[rule].options, {
        paramNames: Rules[rule].paramNames
      })
    );
  });
}


function setupI18n({ i18n: { locale, messages } }) {
  const localizedValidations = require(`vee-validate/dist/locale/${locale}`);
  const localizedAttributes =
    messages[locale].validations && messages[locale].validations.attributes;
  const localizedCustomMessages =
    messages[locale].validations && messages[locale].validations.attributeMessages;
  
  Validator.localize(locale, {
    ...localizedValidations,
    attributes: localizedAttributes,
    custom: localizedCustomMessages,
  });
}

