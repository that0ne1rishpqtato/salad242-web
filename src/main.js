import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";

import routes from "./routes";

Vue.config.productionTip = false;

Vue.use(VueMeta);
Vue.use(VueRouter);

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
