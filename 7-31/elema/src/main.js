import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// 全局引入vuetouter
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 定义路由组件
import Tabbar from './views/Tabbar'
import Detail from './views/Detail'

//嵌套组件
import Home from './views/Tabbar/Home'
import Search from './views/Tabbar/Search'
import Order from './views/Tabbar/Order'
import Mine from './views/Tabbar/Mine'

const routes = [{
  path: '/tabbar',
  component: Tabbar,
  // 嵌套路由，先进底部选项卡，再去找首页
  children: [{
    path: 'home',
    component: Home
  },{
    path: 'search',
    component: Search
  },{
    path: 'order',
    component: Order
  },{
    path: 'mine',
    component: Mine
  }]
},
{
  path: '/detail/:id/:name',
  component: Detail
}
]

const router = new VueRouter({
routes // (缩写) 相当于 routes: routes
})

Vue.prototype.$axios = axios
Vue.prototype.$author = () => {
  return 'luo'
}
//引入vant的组件
import Vant from './vant/index'
Vant()

Vue.config.productionTip = false

new Vue({
  // 让容器装载这个路由插件
  router,
  render: h => h(App),
}).$mount('#app')
