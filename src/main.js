// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'//导入router文件夹，它会自动去找到router文件夹下的index.js，完整写法为./router/index.js
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(Element)

Vue.config.productionTip = false

/* eslint-disable no-new */
//  router,相当于router: router
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
