import Vue from 'vue'
import App from '../app.vue'

window.vue_rails_boilerplate.initSayHello = el => {
  new Vue({
    el,
    components: { App }
  })
}

