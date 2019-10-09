import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "login" //路由重定向
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login/index.vue") //这样写组件就不需要在上面在引入组件了
    }
  ]
});
