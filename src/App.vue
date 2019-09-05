<!-- HTML -->

<template>
  <div id="app">
    <nav>
      <img src="../public/logo.png">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/browsers">Browsers</router-link>
        </li>
        <li>
          <router-link to="/extensions">Extensions</router-link>
        </li>
        <li>
          <router-link to="/apps">Apps</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <a href="https://games.salad242.gq">Games</a>
      </ul>
    </nav>
    <!-- <transition name="fade" mode="out-in"> -->
    <router-view/>
    <!-- </transition> -->
    <img
      src="https://img.shields.io/badge/-No%20longer%20available-inactive.svg"
      style="position:absolute;left:5px;bottom:5px;height:25px;"
    >
    <img
      src="https://img.shields.io/badge/-Available%20soon-yellow.svg"
      style="position:absolute;left:5px;bottom:59px;height:25px;"
    >
    <img
      src="https://img.shields.io/badge/-Working-success.svg"
      style="position:absolute;left:5px;bottom:86px;height:25px;"
    >
    <img
      src="https://img.shields.io/badge/-Blocked by LSR7-red.svg"
      style="position:absolute;left:5px;bottom:32px;height:25px"
    >
    <span style="font-size:15px;position:absolute;left:5px;bottom:111px;">What do the colors mean?</span>
  </div>
</template>

<!-- JavaScript -->

<script>
export default {
  name: "App",
  metaInfo: {
    title: "",
    titleTemplate: "%s • salad242",
    htmlAttrs: {
      lang: "en"
    },
    meta: [{ charset: "utf-8" }]
  }
};
</script>

<!-- CSS -->

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Roboto", sans-serif;
}
nav {
  height: 80px;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 49;
}
nav img {
  height: 50px;
  width: 159px;
  z-index: 50;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-filter: drop-shadow(0px 0px 3px #222222);
  filter: drop-shadow(0px 0px 3px #222222);
}
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
nav li:first-child {
  padding-left: 160px;
}
nav li {
  float: left;
}
nav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
nav li a:hover {
  background-color: #111;
}
.active {
  background-color: #4CAF50;
  color: white;
}
ul.list {
  list-style-type: none;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 100%;
  align-content: center;
  text-align: center;
}
ul.list li {
  display: inline;
}
ul.list li img {
  height: 30px;
  margin: 0px 2.5px;
  padding: 0px 2.5px;
}
.title {
  font-size: 2.5em;
  display: block;
}
.title img {
  height: 2.5em;
}
.home div {
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  align-content: center;
  text-align: center;
}
ul.list .title {
  padding: 5px 0px;
  margin: 5px 0px;
}
.shadow {
  -webkit-filter: drop-shadow(0px 0px 3px #222222);
  filter: drop-shadow(0px 0px 3px #222222);
}
/* .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
} */
</style>
