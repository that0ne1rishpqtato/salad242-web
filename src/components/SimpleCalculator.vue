<template>
  <div class="apps">
    <ul class="list">
      <span class="title">Simple Calculator</span>
      <li>
        Simple Calculator is a browser <i>disguised</i> as a calculator. To unlock it click <b>9 8 5 4</b>.
      </li><br/><br/>
      <li v-for="item in items">
        <a :href="''+item.url">
          <img :src="'https://img.shields.io/badge/-' + item.name + '-' + item.color +'.svg'" :class="'shadow'">
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Simple Calculator",
  metaInfo: {
    title: "Simple Calculator"
  },
  data: function() {
    return {
      items: [
        {
          name: "Add",
          color: "blue",
          url: "https://t01p.page.link/SimpleCalculator"
        },
        {
          name: "Back",
          color: "blueviolet",
          url: "#/browsers"
        }
      ]
    };
  }
};
</script>
