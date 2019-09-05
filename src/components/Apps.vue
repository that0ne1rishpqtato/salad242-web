<template>
  <div class="apps">
    <ul class="list">
      <span class="title">Apps</span>
      <li v-for="item in items">
        <a v-bind:href="''+item.url">
          <img v-bind:src="'https://img.shields.io/badge/-' + item.name + '-' + item.color +'.svg'" class="shadow">
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Apps",
  metaInfo: {
    title: "Apps"
  },
  data: function() {
    return {
      items: [
        {
          name: "None yet.",
          color: "blue",
          url: ""
        }
      ]
    };
  }
};
</script>