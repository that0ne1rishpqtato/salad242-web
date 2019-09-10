<template>
  <div class="extensions">
    <ul class="list">
      <span class="title">Extensions</span>
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
  name: "Extensions",
  metaInfo: {
    title: "Extensions"
  },
  data: function() {
    return {
      items: [
        {
          name: "Quizlet Assistant",
          color: "success",
          url: "https://chrome.google.com/webstore/detail//onomhgmepnaepoahbgffmjameginfgkm"
        },
        {
          name: "salAD Blocker",
          color: "inactive",
          url: "https://chrome.google.com/webstore/detail//ddmladhkbigkncghbhnkebioboipfcpk"
        }
      ]
    };
  }
};
</script>
