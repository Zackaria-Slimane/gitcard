import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/tailwind.css";
import axios from "axios";
import VueAxios from "vue-axios";

let app = createApp(App);

app.use(store);
app.use(VueAxios, axios);
app.mount("#app");
