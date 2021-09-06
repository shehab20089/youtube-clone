import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/global.scss'
import axios from 'axios'
Vue.config.productionTip = false
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
