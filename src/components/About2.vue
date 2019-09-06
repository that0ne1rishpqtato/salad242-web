<template>
  <div class="apps">
    <ul class="list">
      <span class="title">About</span>
      <li>
        salad242 is the creator of many browsers, extensions, games, and more.
      </li><br/>
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
  name: "About",
  metaInfo: {
    title: "About"
  },
  data: function() {
    return {
      items: [
        {
          name: "Back",
          color: "red",
          url: "#/about"
        }
      ]
    };
  }
};
</script>
