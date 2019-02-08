import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
// import '@/register.ts'
import '@/registerServiceWorker'
import '@/common/stylus/index.styl'

import HeaderDetail from '@/components/header-detail/header-detail.vue'
import ShopCartList from '@/components/shop-cart-list/shop-cart-list.vue'
import ShopCartSticky from '@/components/shop-cart-sticky/shop-cart-sticky.vue'
import Food from '@/components/food/food.vue'

import {
  // @ts-ignore
  Style,
  TabBar,
  Popup,
  Dialog,
  Scroll,
  Slide,
  ScrollNav,
  ScrollNavBar,
  createAPI
} from 'cube-ui'

Vue.use(TabBar)
Vue.use(Popup)
Vue.use(Dialog)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(ScrollNav)
Vue.use(ScrollNavBar)
// @ts-ignore
createAPI(Vue, HeaderDetail)
// @ts-ignore
createAPI(Vue, ShopCartList)
// @ts-ignore
createAPI(Vue, ShopCartSticky)
// @ts-ignore
createAPI(Vue, Food)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// # sourceMappingURL=main.js.map
