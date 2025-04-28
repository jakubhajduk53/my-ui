import { createRouter, createWebHistory } from "vue-router";
import MainPageView from "../views/MainPageView.vue";
import ButtonView from "../views/ButtonView.vue";
import InputView from "../views/InputView.vue";

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
      path: "/input",
      name: "input",
      component: InputView,
    },
  ],
});

export default router;
