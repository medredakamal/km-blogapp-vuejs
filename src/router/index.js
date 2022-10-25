import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Categories from "../views/Categories";
import About from "../views/About";
import Post from "../views/Post";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
    meta: {
      title: "Home - KMBlog",
    },
  },
  {
    path: "/categories",
    component: Categories,
    name: "categories",
    meta: {
      title: "Categories - KMBlog",
    },
  },
  {
    path: "/about",
    component: About,
    name: "about",
    meta: {
      title: "About - KMBlog",
    },
  },
  {
    path: "/posts/:id",
    component: Post,
    name: "Post",
    meta: {
      title: "Post Page - KMBlog",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
