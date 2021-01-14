import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

// constantRouterMap：主要是通用部分，每个用户都有的页面
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "Dashboard", icon: "dashboard" }
      }
    ]
  },
  // {
  //   path: "/productxuchen",
  //   component: Layout,
  //   // redirect: '/productxuchen/index',
  //   name: "sms",
  //   meta: { title: "营销", icon: "tree" },
  //   children: [
  //     {
  //       path: "index",
  //       name: "Product",
  //       component: () => import("@/views/productxuChen/index"),
  //       meta: { title: "新品推荐", icon: "tree" }
  //       // hidden: true
  //     },
  //     {
  //       path: "new",
  //       component: () => import("@/views/productxuChen/new"),
  //       meta: { title: "新增商品", icon: "table" },
  //       hidden: true //不会在菜单栏中显示
  //     },
  //     {
  //       path: "edit",
  //       component: () => import("@/views/productxuChen/edit"),
  //       meta: { title: "编辑商品", icon: "table" },
  //       hidden: true //不会在菜单栏中显示
  //     }
  //   ]
  // },
  {
    path: "/productxuchen",
    component: Layout,
    redirect: "/productxuchen/hot",
    name: "sms",
    meta: { title: "营销", icon: "tree" },
    children: [ 
      {
        path: "index",
        name: "homeNew",
        component: () => import("@/views/productxuChen/index"),
        meta: { title: "新品推荐", icon: "form" }
      },
      {
        path: "new",
        component: () => import("@/views/productxuChen/new"),
        meta: { title: "新增商品", icon: "table" },
        hidden: true //不会在菜单栏中显示
      },
      {
        path: "edit",
        component: () => import("@/views/productxuChen/edit"),
        meta: { title: "编辑商品", icon: "table" },
        hidden: true //不会在菜单栏中显示
      },
      {
        path: "hot",
        name: "hot",
        component: () => import("@/views/hotxuChen/index"),
        meta: { title: "人气推荐", icon: "example" }
      }, 
      {
        path: "newhot",
        component: () => import("@/views/hotxuChen/new"),
        meta: { title: "新增商品", icon: "table" },
        hidden: true //不会在菜单栏中显示
      },
      {
        path: "edithot",
        component: () => import("@/views/hotxuChen/edit"),
        meta: { title: "编辑商品", icon: "table" },
        hidden: true //不会在菜单栏中显示
      },
    ]
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

// asyncRouterMap：需要进行权限过滤的页面
export const asyncRoutes = [
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/page",
    alwaysShow: true, // will always show the root menu
    name: "Permission",
    meta: {
      title: "Permission",
      icon: "tree",
      roles: ["admin", "editor"] // you can set roles in root nav
    },
    children: [
      {
        path: "page",
        component: () => import("@/views/permission/page"),
        name: "PagePermission",
        meta: {
          title: "Page Permission",
          roles: ["admin"] // or you can only set roles in sub nav
        }
      },
      {
        path: "directive",
        component: () => import("@/views/permission/directive"),
        name: "DirectivePermission",
        meta: {
          title: "Directive Permission"
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
