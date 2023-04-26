import { createRouter, createWebHashHistory } from "vue-router";
import PostPage from "@/pages/Post.vue";
import PostDetail from "@/pages/PostDetail.vue";

const routes = [
  {
    path: "/",
    component: PostPage,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/posts/:id",
    component: PostDetail,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
