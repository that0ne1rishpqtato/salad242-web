<template>
  <div id="home">
    <ul>
      <li v-for="item in items">
        <a v-bind:href="''+item.url">
          <img v-bind:src="'https://img.shields.io/badge/-' + item.name + '-' + item.color +'.svg'">
        </a>
      </li>
    </ul>
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

<script>
export default {
  name: "HelloWorld",
  metaInfo: {
    title: "Home"
  },
  data: function() {
    return {
      items: [
        {
          name: "Browsers",
          color: "blue",
          url: "/#/browsers"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0;
}
a {
  color: #42b983;
  margin: 0px 0.5px;
  padding: 0px 0.5px;
}
a img {
  height: 38px !important;
  margin: 0px 0.5px;
  padding: 0px 0.5px;
}
</style>
