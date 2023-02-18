import Vue from 'vue'
import App from './App.vue'
// 全局引入模式
import ElementUI, { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'default-passive-events'
Vue.use(ElementUI);
// 引入字体图标
import 'font-awesome/css/font-awesome.min.css'
import '@/permission'
// Vue.prototype.$message = Message
// 引入三方组件库资源
/*
全局引入模式
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI); 
*/
/*
按需引入（可抽离）
import { Button, Select } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button)
*/
// import '@/plugins/common/ele'
import router from './router'
import store from '@/store'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
