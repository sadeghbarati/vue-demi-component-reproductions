import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)

import App from './App.vue'
import './assets/main.css'

Vue.config.productionTip = false
Vue.config.devtools = true


new Vue({
  // router,
  // pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
