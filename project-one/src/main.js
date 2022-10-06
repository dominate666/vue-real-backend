import Vue from 'vue'
import App from './App.vue'
import "../plugins/element"
import "font-awesome/css/font-awesome.min.css"
Vue.config.productionTip = false;
import axios from 'axios'
import router from './router'
import echarts from 'echarts'
Vue.prototype.$echarts=echarts;
Vue.prototype.axios=axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
