import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import "../src/assets/css/animate.css";
import ToastPlugin from "vue-toast-notification";
import "vuetify/styles";

import "vue-toast-notification/dist/theme-sugar.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

defineElement(lottie.loadAnimation);

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(vuetify);
app.use(ToastPlugin);
app.mount("#app");
