import Vue from 'vue'
import App from './App.vue'
import store from "@/store/store";

import scrollAnimation from "@/directives/scrollanimation";
Vue.directive('scrollanimation',scrollAnimation)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
