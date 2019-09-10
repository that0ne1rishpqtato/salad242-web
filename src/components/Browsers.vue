<template>
  <div class="browsers">
    <ul class="list">
      <span class="title">Browsers</span>
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
  name: "Browsers",
  metaInfo: {
    title: "Browsers"
  },
  data: function() {
    return {
      items: [
        {
          name: "Simple Calculator",
          color: "success",
          url: "#/simplecalculator"
        },
        {
          name: "Discontinued Browsers",
          color: "blueviolet",
          url: "#/discontinued"
        }
      ]
    };
  }
};
</script>
