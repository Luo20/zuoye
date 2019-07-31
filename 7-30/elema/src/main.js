import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.prototype.$author = () => {
  return 'luo'
}
//引入vant的组件
import Vant from './vant/index'
Vant()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
