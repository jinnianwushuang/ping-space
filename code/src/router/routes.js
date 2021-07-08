/*
 * @Date           : 2020-10-18 22:11:03
 * @FilePath       : /ping-space/src/router/routes.js
 * @Description    : 
 */
const routes = [
  {
    path: "/",
    name: "container",
    redirect: { name: 'html' },
    component: () => import("src/layouts/MainLayout.vue"),

    children: [
      {
        path: "temp",
        name: "temp",
        component: () => import("src/pages/temp/index.vue")
      },
      {
        path: "html",
        name: "html",
        component: () => import("src/pages/html/index.vue")
      },
      {
        path: "css",
        name: "css",
        component: () => import("src/pages/css/index.vue")
      },
      {
        path: "js",
        name: "js",
        component: () => import("src/pages/js/index.vue")
      },
      {
        path: "other",
        name: "other",
        component: () => import("src/pages/other/index.vue")
      },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("src/pages/error/Error404.vue")
  }
];

export default routes;
