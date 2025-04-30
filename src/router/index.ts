import { createRouter, createWebHistory } from "vue-router";
import MainPageView from "../views/MainPageView.vue";
import ButtonView from "../views/ButtonView.vue";
import ColorView from "../views/ColorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPageView,
    },
    {
      path: "/button",
      name: "button",
      component: ButtonView,
    },
    {
      path: "/color",
      name: "color",
      component: ColorView,
    },
  ],
});

export default router;
