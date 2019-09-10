<template>
  <div class="apps">
    <ul class="list">
      <span class="title">About</span>
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
          name: "Contact",
          color: "blue",
          url: "#/contact"
        },
        {
          name: "About",
          color: "blue",
          url: "#/about2"
        }
      ]
    };
  }
};
</script>
