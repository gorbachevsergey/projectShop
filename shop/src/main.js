import Vue from 'vue'
import App from './App.vue'

import scrollAnimation from "@/directives/scrollanimation";
Vue.directive('scrollanimation',scrollAnimation)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
