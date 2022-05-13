import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';


Vue.use(BootstrapVue);
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
