import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import "boxicons/css/boxicons.min.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
