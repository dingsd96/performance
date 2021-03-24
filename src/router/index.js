import Vue from "vue"
import Router from "vue-router"
import RouterConfig from "./modules/index" // 引入业务逻辑模块
import CommonRouters from "./common"

Vue.use(Router)

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: RouterConfig.concat(CommonRouters),
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
