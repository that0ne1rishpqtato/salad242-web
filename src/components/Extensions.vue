<template>
  <div class="extensions">
    <ul class="list">
      <span class="title">Extensions</span>
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
  name: "Extensions",
  metaInfo: {
    title: "Extensions"
  },
  data: function() {
    return {
      items: [
        {
          name: "Quizlet Assistant",
          color: "yellow",
          url: "https://chrome.google.com/webstore/detail//onomhgmepnaepoahbgffmjameginfgkm"
        },
        {
          name: "salAD Blocker",
          color: "yellow",
          url: "https://chrome.google.com/webstore/detail//ddmladhkbigkncghbhnkebioboipfcpk"
        }
      ]
    };
  }
};
</script>