export default [
  {
    path: "/",
    redirect: "/login",
    meta: {
      title: "index页面",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index"),
    meta: {
      title: "注册/登录",
    },
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/index"),
    meta: {
      title: "首页",
    },
  },
]
