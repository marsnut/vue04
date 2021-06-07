import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, {size: 'small', zIndex:3000 })
Vue.config.productionTip = false

//import { Button } from 'element-ui'
//Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
//Vue.component(Button.name, Button);
//Vue.component(Select.name, Select);

router.beforeEach((to,from,next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLogined']) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
