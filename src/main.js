import Vue from 'vue'
import 'normalize.css/normalize.css'
import 'babel-polyfill'
import '@/styles/index.scss'
import App from './App'
import router from './router'
import store from './store'
import './icons'
import './errorLog'
import * as filters from './filters'
import '@/utils/aos.js'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
