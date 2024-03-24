import { createRouter, createWebHistory } from 'vue-router';
import ZidoMain from "@/components/zido/ZidoMain.vue";
import ZidoSecond from "@/components/zido/ZidoSecond.vue";
import ErrorPage from "@/components/util/ErrorPage.vue";

const routes = [
  {
    path: "/",
    component: ZidoMain,
    meta: {page: 1}
  },
  {
    path: "/zido",
    component: ZidoMain,
    meta: {page: 1}
  },
  {
    path: "/zido/1",
    component: ZidoMain,
    meta: {page: 1}
  },
  {
    path: "/zido/2",
    component: ZidoSecond,
    meta: {page: 2, last: true}
  },
  {
    path: "/:pathMatch(.*)",
    component: ErrorPage,
    meta: {last: true}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
