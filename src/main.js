import Vue from 'vue'
import App from './App.vue'
import ThisVui from 'thisvui'
import 'thisvui/dist/thisvui.min.css'
import "@fortawesome/fontawesome-free/css/all.css"

Vue.use(ThisVui);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
