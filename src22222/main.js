import Vue from "vue";
import VueMeta from "vue-meta";
import VueRouter from "vue-router";
import router from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueMeta, VueRouter);

new Vue({
  router
}).$mount("#app");
