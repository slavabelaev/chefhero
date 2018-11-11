import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import AppAbout from './views/about.vue'
import AppLogo from './components/Logo.vue'
import AppNavigation from './components/Navigation.vue'
import App from './App.vue'
import router from './router'

Vue.component('app-logo', AppLogo)
Vue.component('app-about', AppAbout)
Vue.component('app-navigation', AppNavigation)

Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
