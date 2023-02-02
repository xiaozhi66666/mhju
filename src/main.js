import Vue from 'vue'
import App from './App.vue'
//重置css
import '@/common/reset.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
