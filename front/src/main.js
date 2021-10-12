import Vue from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

//Archivo vue pag.principal
import AppPage from './AppPage.vue'



Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(AppPage)
}).$mount('#app')
