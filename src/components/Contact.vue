<template>
  <div class="apps">
    <ul class="list">
      <span class="title">Contact</span>
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
  name: "Contact",
  metaInfo: {
    title: "Contact"
  },
  data: function() {
    return {
      items: [
        {
          name: "Back",
          color: "red",
          url: "#/about"
        },
        {
          name: "Email",
          color: "blue",
          url: "mailto:jacob@salad242.gq"
        },
        {
          name: "Discord",
          color: "blue",
          url: "javascript:alert('I am ThePqtatoGalaxy#9001 on Discord')"
        },
        {
          name: "Kermit's Meme Truck",
          color: "blue",
          url: "https://discord.gg/W8MC5dE"
        }
      ]
    };
  }
};
</script>
