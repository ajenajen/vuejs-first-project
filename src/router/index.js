import { createRouter, createWebHashHistory } from "vue-router";
import PostPage from "@/pages/Post.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: PostPage,
  },
  {
    path: "/post/:id",
    name: "post-detail",
    component: PostPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
