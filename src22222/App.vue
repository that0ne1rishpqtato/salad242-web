<template>
  <div id="app">
    <img width="280vw" src="./assets/logo.png">
    <Browsers/>
  </div>
</template>

<script>
import VueRouter from "vue-router";
import routes from './routes';

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default {
  name: "App",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s • salad242",
    htmlAttrs: {
      lang: "en"
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
