import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import LoadingDialog from './components/loadingdialog/index.js'

Vue.config.productionTip = false
Vue.use(LoadingDialog)
axios.defaults.baseURL="http://188.188.1.15:3000";//"http://192.168.3.151:3000";//"http://mxthink.cross.echosite.cn/api";//

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

