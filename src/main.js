import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from './assets/scss/bootstrap.scss'
import Navbar from "./components/layout/Navbar.vue";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
